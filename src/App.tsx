/* Packages/Libraries */
import { useState } from 'react';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

/* Classes */
import { Events } from './classes/Events';

/* Styles */
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.scss';


const locales = {
  'en-US': require('date-fns/locale/en-US'),
  'fr': require('date-fns/locale/fr'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  new Events('Event 1', new Date(2023,0,3), new Date(2023,0,4)),
  new Events('Event 2', new Date(2023,0,6), new Date(2023,0,12)),
  new Events('Event 3', new Date(2023,0,7), new Date(2023,0,15)),
]

/**
 * Returns the react app component.
 * @returns JSX.Element
 */
const App = () => {
  return (
    <div className="App">
      <Calendar
        className="Calendar"
        localizer={localizer}
        events={events.map((event) => {
          return {
            title: event.Title,
            allDay: event.IsAllDay,
            start: event.StartDate,
            end: event.EndDate,
          }
        })}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default App;
