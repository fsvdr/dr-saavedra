import React from 'react';
import styled from 'styled-components';
import { addDays, eachDayOfInterval, isToday, isTomorrow, format, isSunday } from 'date-fns';
import { es } from 'date-fns/locale';

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
    text-decoration-thickness: 2px;

    &::before,
    &::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    &::before {
      content: '[El horario de]';
    }

    &::after {
      content: '[ya está ocupado]';
    }
  }

  & p {
    margin-block-end: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: var(--font-size-xs);
  }
`;

const OfficeHours = [
  // From top to bottom: Mon, Tue, Wed, Thu, Fri, Sat
  ['15:00', '15:30', '16:00', '16:30', '17:00'],
  ['12:00', '12:30', '13:00', '13:30'],
  ['10:00', '10:30', '11:00', '11:30'],
  ['17:30', '18:00', '18:30', '19:00', '19:30'],
  ['12:00', '12:30', '13:00', '13:30'],
  ['12:00', '12:30', '13:00', '13:30'],
];

const getTimetableDateJSX = (day) => {
  // eslint-disable-next-line prettier/prettier
  if (isToday(day)) return (<th scope="row" key={day}>Hoy</th>);
  // eslint-disable-next-line prettier/prettier
  if (isTomorrow(day)) return (<th scope="row" key={day}>Mañana</th>);

  return (
    <th scope="row" key={day}>
      {format(day, 'EEE d', { locale: es }).replace(/^\w/, (c) => c.toUpperCase())}
    </th>
  );
};

const getTimetableJSX = ([date, hours = []]) => {
  return (
    <tr key={date}>
      {getTimetableDateJSX(date)}

      {isSunday(date) ? (
        <td colSpan="5">
          <p>
            Horario abierto de <time dateTime="10:00">10:00</time> a <time dateTime="20:00">16:00</time>
          </p>
        </td>
      ) : (
        hours.map((time) => (
          <td key={`${date}${time}`}>
            <time dateTime={time}>{time}</time>
          </td>
        ))
      )}
    </tr>
  );
};

const OfficeAvailability = () => {
  const today = new Date();
  const fiveDaysFromToday = addDays(today, 5);
  const timetableDates = eachDayOfInterval({ start: today, end: fiveDaysFromToday });
  const timetable = timetableDates.map((date) => [date, OfficeHours[date.getDay() - 1]]);

  return (
    <StyledTable>
      <caption>Horarios disponibles para los siguientes cinco días</caption>

      <tbody>{timetable.map(getTimetableJSX)}</tbody>
    </StyledTable>
  );
};

export default OfficeAvailability;
