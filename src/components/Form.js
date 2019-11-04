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
        <History className={styles.history} history={this.state.history} />
        <form onSubmit={this.handleSubmit}>
          <input className={styles.UrlInput} type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          <section>
            <label>
              <input type="radio" name="method" value="GET" onChange={this.handleChange} />GET
            </label>
            <label>
              <input type="radio" name="method" value="PUT" onChange={this.handleChange} />PUT
            </label>
            <label>
              <input type="radio" name="method" value="POST" onChange={this.handleChange} />POST
            </label>
            <label>
              <input type="radio" name="method" value="PATCH" onChange={this.handleChange} />PATCH
            </label>
            <label>
              <input type="radio" name="method" value="DELETE" onChange={this.handleChange} />DELETE
            </label>
            <button>Go!</button>
          </section>
          <textarea className={styles.jsonContainer} name="jsonInput" value={this.state.jsonInput} onChange={this.handleChange} cols="30" rows="5"></textarea>
          <div className={styles.results}>
            <Results results={this.state.apiData} />
          </div>
        </form>
      </div>

    );
  }
}
