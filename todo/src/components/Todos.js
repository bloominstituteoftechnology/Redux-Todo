import React, {Component} from "react";
import {connect} from 'react-redux';

class Todos extends Component {
  render() {
    return (
      <div>
        <h1> DüStuf </h1>
        <form onSubmit={() => {return}}>
            <input onChange={() => {}}
              placeholder="todo"
              name="todo"
            />
            <button type="submit">Add</button>
          </form>
      </div>
    );
  }
}

export default Todos;
