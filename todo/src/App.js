import React, { Component } from 'react';
import './App.css';
import { addTodo, deleteTodo, completeTodo } from './action'
import { connect } from "react-redux";
import ToDoForm from './TodoForm';

class App extends Component {
  
  dateDivide = (todos) => {
    console.log(todos);
    const groups = todos.reduce((groups, todo) => {
      const date = todo.date;
      if(!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(todo);
      console.log("groups",groups);
      return groups;
    }, {});

    return Object.keys(groups).map((date) => {
      return {
        date,
        todos: groups[date]
      };
    });
  }

  render() {
    return (
      <div className="App mw8 center ba">
        <ToDoForm />
        {console.log("New Array",this.dateDivide(this.props.todos))}
        {this.dateDivide(this.props.todos).map(obj => {
          return (
            <div key={obj.date}>
              <h3 className="this-goddamn-h3">{obj.date}</h3>
              <div className="mw-100 flex flex-wrap">
              {obj.todos.map(e => {
              return (
                  <div 
                    key={e.id}
                    className="ba b--dashed w5 ma2 pa2 tc" 
                    onClick={() => {this.props.completeTodo(e.id)}}
                    >
                      <h4 style={e.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}> {e.value} </h4>
                      <button 
                        className={`delete ${e.completed ? `show` : `hide`}`}
                        onClick={() => {this.props.deleteTodo(e.id)}}
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                  </div>
                  );
                })}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo, completeTodo })(App);
