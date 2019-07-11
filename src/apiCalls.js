import React from 'react';

export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => error.message)
}
