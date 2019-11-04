import React, { Component } from 'react';
import apiCall from '../services/api-call';
import Results from './Results';
import History from './History';
import styles from './Form.css';

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
      
      <div className={styles.Form}>
        <div className={styles.history}>
          <History history={this.state.history} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.urlInput} type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          <div>
            <label>
              <input className={styles.radio} type="radio" name="method" value="GET" onChange={this.handleChange} />GET
            </label>
            <label>
              <input className={styles.radio} type="radio" name="method" value="PUT" onChange={this.handleChange} />PUT
            </label>
            <label>
              <input className={styles.radio} type="radio" name="method" value="POST" onChange={this.handleChange} />POST
            </label>
            <label>
              <input className={styles.radio} type="radio" name="method" value="PATCH" onChange={this.handleChange} />PATCH
            </label>
            <label>
              <input className={styles.radio} type="radio" name="method" value="DELETE" onChange={this.handleChange} />DELETE
            </label>
            <button>Go!</button>
          </div>
          <textarea name="jsonInput" value={this.state.jsonInput} onChange={this.handleChange} cols="30" rows="10"></textarea>
          <Results results={this.state.apiData} />
        </form>
      </div>
    
    );
  }
}
