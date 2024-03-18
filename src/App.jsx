import React, {useEffect, useState} from 'react';
import './App.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'

];

function App() {
const [time, setTime] = useState(new Date().toLocaleDateString());
  const[isBedtime, setIsBedTime] = useState(false);

  const handleBedTime = () => {setIsBedTime(true)};

  const getGreeting = () => {
    let date = new Date();
    let hours = date.getHours();
    let month = date.getMonth();
    let todayDate = date.getDate();
    let year = date.getFullYear();

    let greet = '';
    let currentDate = `${months[month]} ${todayDate} ${year} `;

    if(hours < 12) greet = 'good morning';
    else if(hours >= 12 && hours < 16) greet = 'good afteroon';
    else if(hours >= 16 && hours < 24) greet = 'good eveninig';

    return {greet, currentDate};
  }

  setInterval(() => {
    setTime(new Date().toLocaleDateString());
  }, 1000);

  return(
    <div className='greeting_box'>
    <div className='gb_content_top'>
    <h2 className='gb_content_date_text'>{getGreeting().currentDate}</h2>
      <h2 className='gb_content_time_text'>{time}</h2>
     
    </div>
      <div className='gb_content_middle'>
      <h1 className='gb_content_greet_text'>{isBedtime ? 'good night' : `${getGreeting().greet}`}</h1>
      </div>

      <div className='gb_content_bottom'>
      <button className='gb_content_btn_sleep' onClick={handleBedTime}>its bedtime</button>
      </div>
      
    </div>
  )
}

export default App;
