import React, { Component } from 'react';
import apiCall from '../services/api-call';
import Results from './Results';

export default class Form extends Component {
  state = {
    apiData: {},
    url: '',
    textArea: ''
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    apiCall(this.state.url, this.state.name)
      .then(result => {
        console.log('Result: ', result);
        this.setState({ apiData: result });
      });
  }
  
  render() { //check textarea value
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
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
        <Results results={this.state.result}/>
      </>
    );
  }
}
