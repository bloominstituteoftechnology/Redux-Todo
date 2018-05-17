import React from "react";
import { connect } from 'react-redux';
import { toggle } from '../actions';
// import Todo from './components/Todo';

const Container = props => {
    
        return (
          <div>
          <h1>Todo List</h1>          
          {props.todos.map((todo) => {          
             
                return (
                      <div style={todo.completed? {textDecoration: 'line-through'}: null }onClick={() => props.toggle(todo.id)} key={todo.id}>{todo.text}</div>
                )                
             })
           }          
          </div>
        );    
}
const mapStateToProps = (state) => {
    
    return {
        todos: state
    };
};
export default connect(mapStateToProps, {toggle })(Container);