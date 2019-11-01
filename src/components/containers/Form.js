import React, { Component } from 'react';

export default class Form extends Component {
  state = {

  }

  handleChange = ({ target }) => {
    this.setState({value: target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() { //check textarea value
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>
        <input type="radio" name="GET" value="GET"/>GET
        <input type="radio" name="PUT" value="PUT"/>PUT
        <input type="radio" name="POST" value="POST"/>POST
        <input type="radio" name="PATCH" value="PATCH"/>PATCH
        <input type="radio" name="DELETE" value="DELETE"/>DELETE
        <button>Go!</button>
        </div>
        <input type="textarea" value={this.state.value} onChange={this.handleChange}/> 
      </form>
    );
  }
}