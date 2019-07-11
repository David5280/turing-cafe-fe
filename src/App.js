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
    .then(results => this.setState(results))
    .catch(error => this.setState({ error: error }));
    
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
