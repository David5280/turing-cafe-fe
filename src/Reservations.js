import React, { Component } from 'react'
import ReservationCard from './ReservationCard'

const Reservations = ({ reservations, cancelRes }) => {
  console.log(reservations)
  const allReservations = reservations.map(reserv => {
    return <ReservationCard
              name={reserv.name}
              date={reserv.date}
              time={reserv.time}
              number={reserv.number}
              key={reserv.id}
              cancelRes={cancelRes}
              />
    })
  return (
      allReservations
    
  )
}

export default Reservations
