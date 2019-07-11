import React from 'react';

export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
  .then(data => data)
  .catch(error => error.message);
}

export const postNewReservation = ({ name, date, time, id, number }) => {
  fetch('//localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      date: date,
      time: time,
      is: id,
      number: number
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

