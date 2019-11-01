import React, { Component } from 'react';
import apiCall from '../services/api-call';

export default class Form extends Component {
  state = {
    value: '',
    apiData: [],
    url: '',
    textArea: ''
  }

  componentDidMount() {
    apiCall(this.state.url.value)
      .then(result => this.setState({ apiData: result }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  
  render() { //check textarea value
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.url.value} onChange={this.handleChange} />
        <div>
          <input type="radio" name="method" value="GET" onChange={this.handleChange}/>GET
          <input type="radio" name="method" value="PUT" onChange={this.handleChange}/>PUT
          <input type="radio" name="method" value="POST" onChange={this.handleChange}/>POST
          <input type="radio" name="method" value="PATCH" onChange={this.handleChange}/>PATCH
          <input type="radio" name="method" value="DELETE" onChange={this.handleChange}/>DELETE
          <button>Go!</button>
        </div>
        <input type="textarea" value={this.state.textArea.value} onChange={this.handleChange} />
      </form>
    );
  }
}
