const { google } = require('googleapis');
const { eachDayOfInterval } = require('date-fns');

/**
 *  Get the calendar's busy time slots within the provided frame using the
 *  Google Calendar API
 */
exports.handler = async (event) => {
  const calendarID = process.env.GOOGLE_CALENDAR_ID;
  const qs = new URLSearchParams(event.queryStringParameters);
  const start = qs.get('start');
  const end = qs.get('end');

  const jwt = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar']
  );
  await jwt.authorize();
  const response = await google.calendar('v3').freebusy.query({
    auth: jwt,
    requestBody: {
      timeMin: start,
      timeMax: end,
      items: [
        {
          id: calendarID,
        },
      ],
    },
  });

  if (!response)
    return { statusCode: 500, body: JSON.stringify({ message: 'Failed to communicate with the Calendar API.' }) };

  if (response.data.calendars[calendarID].errors)
    return { statusCode: 500, body: JSON.stringify({ errors: response.data.calendars[calendarID].errors }) };

  const appointments = response.data.calendars[calendarID].busy;
  const appointmentsPerDateMap = new Map();

  // We are requested with the appointments (if any) for each day within the interval provided
  // so here we'll make sure to initialize an empty array for each of those dates
  eachDayOfInterval({ start: new Date(start), end: new Date(end) }).forEach((date) => {
    const key = date.toISOString().split('T')[0];
    appointmentsPerDateMap.set(key, []);
  });

  // No we organize all our appointments in their corresponding date
  appointments.forEach((appointment) => {
    const key = appointment.start.split('T')[0];
    appointmentsPerDateMap.set(key, [...appointmentsPerDateMap.get(key), appointment]);
  });

  return { statusCode: 200, body: JSON.stringify([...appointmentsPerDateMap.values()]) };
};
