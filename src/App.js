import React, { Component } from 'react';
import { getReservations } from './apiCalls';
import Reservations from './Reservations';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          ({(this.state.reservations.length) && <Reservations reservations={this.state.reservations}/>})
        </div>
      </div>
    )
  }
}

export default App;
