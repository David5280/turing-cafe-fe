import React, { Component } from 'react'
import './ResForm.css'

export class ResForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    console.log(data)
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
      <div>
        <form className='new-res-form' onSubmit={this.handleSubmit}>
          <label for='name-input'>Name</label>
          <input type='text' name='name' id='name-input' onChange={this.handleChange} value={this.state.name}/>
          <label for='date-input'>Date</label>
          <input type='text' name='date' id='date-input' onChange={this.handleChange} value={this.state.date}/>
          <label for='time-input'>Time</label>
          <input type='text' name='time' id='time-input' onChange={this.handleChange} value={this.state.time}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default ResForm;
