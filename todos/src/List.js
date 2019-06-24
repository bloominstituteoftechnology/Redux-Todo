 import {addTodo ,toggleTodo } from "./actions/actions";
 import React from 'react';
 import {connect} from 'react-redux';
//  import{React.Fragment} from 'react';
import './App.css'

 class List extends React.Component {
     state= {
         todos: ""
     }
 

 handleChanges = e => {
     this.setState ({todos: e.target.value})
 };


 addTodo = e => {
     e.preventDefault();
     this.props.addTodo(this.state.todos)
 }

 toggleTodo = (e, index) => {
     this.props.toggleTodo(index);
 };

 render() { 
    return (
     <>
        <div className="todos-list">
          {this.props.todos.map((todo, index) => {
              return (
                <div>
            <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
              {todo.name}

             </h4>
            <h1 key = {index}>{todo.completed}</h1>
            </div>
                
              )


          }
             
          )}
        </div>
        <input
          type="text"
          value={this.state.todos}
          placeholder="add new member"
          onChange={this.handleChanges}
        />
        <button onClick= {this.addTodo}>add friends</button>
      </>
    );
  }}



const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(
    mapStateToProps,
   { addTodo,toggleTodo}
)(List);