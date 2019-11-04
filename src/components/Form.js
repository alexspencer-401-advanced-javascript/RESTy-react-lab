import React, { Component } from 'react';
import apiCall from '../services/api-call';
import Results from './Results';
import History from './History';

export default class Form extends Component {

  state = {
    history: [],
    apiData: [],
    url: '',
    method: '',
    jsonInput: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    apiCall(this.state.url, this.state.name)
      .then(result => {
        this.setState({ apiData: result });
        this.setState(state => ({ history: [{ url: this.state.url, method: this.state.method }, ...state.history] }));
      }
      );
  }

  render() {
    return (
      
      <div>
        <History history={this.state.history} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          <div>
            <input type="radio" name="method" value="GET" onChange={this.handleChange} />GET
            <input type="radio" name="method" value="PUT" onChange={this.handleChange} />PUT
            <input type="radio" name="method" value="POST" onChange={this.handleChange} />POST
            <input type="radio" name="method" value="PATCH" onChange={this.handleChange} />PATCH
            <input type="radio" name="method" value="DELETE" onChange={this.handleChange} />DELETE
            <button>Go!</button>
          </div>
          <textarea name="jsonInput" value={this.state.jsonInput} onChange={this.handleChange} cols="30" rows="10"></textarea>
          {/* <input type="text" value={this.state.textArea.value} onChange={this.handleChange} /> */}
        </form>
        <Results results={this.state.apiData} />
      </div>
    
    );
  }
}
