import React from 'react';
import { connect } from 'react-redux'; 
import {toggleCompleted} from '../Actions';

class TodoList extends React.Component {
    constructor() {
        super();
    }

    toggleHandler = (e, index) => {
        e.preventDefault();
        this.props.todos.map((todo, i) => {
            if(index === i) {
                this.props.toggleCompleted(index);
            }
        })
    }
    render(){
        return(
            this.props.todos.map((todo, index) => {
                return <p className={todo.completed.toString()} onClick={(e) => this.toggleHandler(e, index)}>{todo.task}</p>
            })
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.todos,
    };
  };
  
  export default connect(
    mapStateToProps,
    {toggleCompleted}
  )(TodoList);