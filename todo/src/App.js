import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleCompleted } from "./actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ todoText: ev.target.value });
  };

  addNewTodo = ev => {
    ev.preventDefault();

    this.props.addTodo({
       todoText: this.state.todoText
    });

    this.setState({ todoText: "" });
  };

  deleteTodo = (ev, index) => {
    ev.preventDefault();
    this.props.deleteTodo(index);
  }

  toggleCompleted = (ev, index) => {
    ev.preventDefault();
    this.props.toggleCompleted(index);
  }


  render() {
   
    return (
      <div>
        
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New Todo"
          value={this.state.todoText}
        />
        <button onClick={this.addNewTodo}>add</button>
        <ul>
        {this.props.todos.map((todo, index) => {
          
           if(todo.isCompleted){
            return(<li key={index} className = "todo"> 
              <p className={`completed${todo.isCompleted}`}
                  onClick={(ev) => this.toggleCompleted(ev, index)}>{todo.todoText}</p>
                  <span onClick={(ev) => this.deleteTodo(ev, index)}>  x  </span> 
            </li>
            )
           }
           else{
             return(
             <li key={index} className = "todo"> 
             <p className={`completed${todo.isCompleted}`}
                 onClick={(ev) => this.toggleCompleted(ev, index)}>{todo.todoText}</p>
         
           </li>);
            
           }
        
          }
          )}

        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
 console.log("mapState", state.todoList);
  return {
    todos: state.todoList,
   };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo, toggleCompleted }
)(App);
