import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ name, date, time, number }) => {
  return (
    <article className='resCard'>
      <h1>Name:  {name}</h1>
      <p>date:  {date}</p>
      <p>Time:  {time}</p>
      <p>Number:  {number}</p>
    </article>
  )
}

export default ReservationCard;