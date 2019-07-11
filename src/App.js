import React, { Component } from 'react';
import { getReservations } from './apiCalls';
import Reservations from './Reservations';
import ResForm from './ResForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(results => this.setState({ reservations: results }))
    .catch(error => this.setState({ error: error }));
  }

  addReservation = () => {

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm addRes={this.addReservation}/>
        </div>
        <div className='resy-container'>
          ({(this.state.reservations.length) && <Reservations reservations={this.state.reservations}/>})
        </div>
      </div>
    )
  }
}

export default App;
