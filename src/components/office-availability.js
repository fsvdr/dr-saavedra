import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  addDays,
  eachDayOfInterval,
  isToday,
  isTomorrow,
  format,
  isSunday,
  areIntervalsOverlapping,
  addMinutes,
  isPast,
} from 'date-fns';
import { es } from 'date-fns/locale';
import capitalize from '../utils/capitalize';
import asyncWrap from '../utils/asyncWrap';
import { schedule } from '../data/office-schedule.json';

const StyledTable = styled.table`
  min-width: 32rem;
  width: 100%;
  font-size: var(--font-size-xs);
  margin-block-end: 1.6rem;

  & caption {
    margin-block-end: 1rem;
  }

  & tr {
    text-align: left;
    margin-block-end: 1rem;
  }

  & tr:not(:last-child) {
    border-bottom: 1px dotted var(--color-grey);
  }

  & td {
    padding-block-start: 0.4rem;
    padding-block-end: 0.4rem;
  }

  & td s {
    color: var(--color-text-subtle);
    text-decoration-thickness: 1px;
  }

  & p {
    margin-block-end: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: var(--font-size-xs);
  }
`;

const getDateHeaderJSX = (day) => {
  if (isToday(day))
    return (
      <th scope="row" key={day}>
        <span aria-label="Horarios para hoy">Hoy</span>
      </th>
    );

  if (isTomorrow(day))
    return (
      <th scope="row" key={day}>
        <span aria-label="Horarios para mañana">Mañana</span>
      </th>
    );

  return (
    <th scope="row" key={day}>
      <span aria-label={`Horarios para el ${format(day, 'EEEE d', { locale: es })}`}>
        {capitalize(format(day, 'EEE d', { locale: es }))}
      </span>
    </th>
  );
};

const getTimetableJSX = ([date, hours = []]) => {
  return (
    <tr key={date}>
      {getDateHeaderJSX(date)}

      {isSunday(date) ? (
        <td colSpan="5" aria-labelledby="instruction start to end">
          <span id="instruction">Horario abierto de </span>
          <time id="start" dateTime="10:00">
            10:00
          </time>
          <span id="to"> a </span>
          <time id="end" dateTime="20:00">
            16:00
          </time>
        </td>
      ) : (
        hours.map(({ time, busy }) => (
          <td key={`${date}${time}`}>
            {busy ? (
              <s>
                <time dateTime={time} aria-label={`${time} (ocupado)`}>
                  {time}
                </time>
              </s>
            ) : (
              <time dateTime={time} aria-label={`${time}`}>
                {time}
              </time>
            )}
          </td>
        ))
      )}
    </tr>
  );
};

/**
 * Given a provided timetable and a list of appointments, return a new timetable
 * with the hours that overlap with an appointment maked as busy
 * @param timetable
 * @param appointments
 */
const getAvailabilityTimetable = (timetable, appointments) => {
  const availabilityTimetable = timetable.map(([date, hours = []], dateIndex) => {
    const datetime = new Date(date);

    const availabilityRichHours = hours.map(({ time }) => {
      const [hours, minutes] = time.split(':');
      datetime.setHours(hours);
      datetime.setMinutes(minutes);

      if (isPast(datetime)) return { time, busy: true };

      const overlappedAppointment = appointments[dateIndex].find((appointment) =>
        areIntervalsOverlapping(
          { start: datetime, end: addMinutes(datetime, 30) },
          { start: new Date(appointment.start), end: new Date(appointment.end) }
        )
      );

      return { time, busy: overlappedAppointment !== undefined };
    });

    return [date, availabilityRichHours];
  });

  return availabilityTimetable;
};

const OfficeAvailability = () => {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const today = new Date();
    const fiveDaysFromToday = addDays(today, 5);
    const timetableDates = eachDayOfInterval({ start: today, end: fiveDaysFromToday });
    const timetable = timetableDates.map((date) => {
      const hours = schedule[date.getDay() - 1] || [];
      // Initialize all office hours as not busy
      return [date, hours.map((hour) => ({ time: hour, busy: false }))];
    });

    // Set our "totally-not-busy" timetable as soon as possible, if everything goes right with
    // fetching current appointments we'll update it then
    setTimetable(timetable);

    const getAppointments = async () => {
      const [error, response] = await asyncWrap(
        fetch(
          `/.netlify/functions/calendar-availability?start=${timetableDates[0].toISOString()}&end=${timetableDates[
            timetableDates.length - 1
          ].toISOString()}`
        )
      );

      if (error) return;

      const appointments = await response.json();

      setTimetable(getAvailabilityTimetable(timetable, appointments));
    };

    getAppointments();
  }, []);

  return (
    <StyledTable>
      <caption>Horarios disponibles para los siguientes cinco días</caption>

      <tbody>{timetable.map(getTimetableJSX)}</tbody>
    </StyledTable>
  );
};

export default OfficeAvailability;
