import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { changeTodo } from '../actions';

const AddTodo = props => {
  console.log(props.input);
   
    return (
        
        <div>
            <form>
            
                <input  onChange={event => props.changeTodo(event.target.value)} ></input>
                <button onClick={event => {
                    event.preventDefault();
                    props.addTodo(props.changeTodo)}}>Add Todo</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
    
});


export default connect(mapStateToProps, { addTodo, changeTodo })(AddTodo);