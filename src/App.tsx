/* Packages/Libraries */
import { useState } from 'react';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

/* Styles */
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';


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

/**
 * Returns the react app component.
 * @returns JSX.Element
 */
const App = () => {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
