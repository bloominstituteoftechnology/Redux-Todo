import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/Actions.js";
import "../styles/Todos.css";

class Todos extends Component {
  render() {
    return (
      <div className="Component-main">
        <h1>To Do List</h1>
        <form onSubmit={this.formAction}>
          <input type="text"/>
          <button>Add a Task!</button>
        </form>
      </div>
    );
  }
  formAction(){
    
  }
}

const mapStateToProps = state => {
  console.error(state, 'this is the mapStateToProps store value');
  return {
    addTodo: state
  };
};
export default connect(mapStateToProps, { addTodo })(Todos);
