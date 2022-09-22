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

const tempEvents = [
  new Events('Event 1', new Date(2023,0,3), new Date(2023,0,4)),
  new Events('Event 2', new Date(2023,0,6), new Date(2023,0,12)),
  new Events('Event 3', new Date(2023,0,7), new Date(2023,0,15)),
]

/**
 * Returns the react app component.
 * @returns JSX.Element
 */
const App = () => {
  const [allEvents, setAllEvents] = useState<Events[]>(tempEvents);
  const [newEvent, setNewEvent] = useState<Events>(new Events("", new Date(), new Date()));

  // Adds a new event to the list of events.
  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    setNewEvent(new Events("", new Date(), new Date()));
  }

  return (
    <div className="app">
      <h1>SCHEDULE CALENDAR APP</h1>

      <div className="NewEventAdder">
        <h3>Create New Event</h3>
        <input
          className="title"
          type="text"
          placeholder="Add Title"
          value={newEvent.Title}
          onChange={ (e) => setNewEvent(new Events(newEvent.Title=e.target.value, newEvent.StartDate, newEvent.EndDate)) } 
        />
        <DatePicker
          className="startDate"
          selected={newEvent.StartDate}
          onChange={ (date) => setNewEvent(new Events(newEvent.Title, newEvent.StartDate=date, newEvent.EndDate)) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <DatePicker
          className="endDate"
          selected={newEvent.EndDate}
          onChange={ (date) => setNewEvent(new Events(newEvent.Title, newEvent.StartDate, newEvent.EndDate=date)) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button className="addNewEventButton" onClick={handleAddEvent}>Add Event</button>
      </div>
      
      <Calendar
        className="calendar"
        localizer={localizer}
        events={allEvents.map((event) => {
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
