const { google } = require('googleapis');

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

  const calendar = response.data.calendars[calendarID];

  return { statusCode: 200, body: JSON.stringify(calendar.busy || []) };
};
