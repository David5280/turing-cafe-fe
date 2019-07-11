import React from 'react';

export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
  .then(data => data)
  .catch(error => error.message);
}

export const postNewReservation = ({ name, date, time, id }) => {
  const options = {
    method: 'post',
    body: {
    'name': 
    'date':
    'time':
    'id':
    'key':
    }
  }
  fetch('http://localhost:3001/api/v1/reservations', options)
}

