import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../actions';
import './TodoItem.css';

class TodoItem extends Component {

  deleteTodo = (event) => {
    
    event.stopPropagation();

    this.props.deleteTodo(this.props.index);

  }

  render() {
    const completedStyles = (this.props.todo.completed) ? "TodoItem TodoItem--completed" : "TodoItem";
    
    return (
      <div className={ completedStyles } onClick={ () => this.props.toggleTodo(this.props.index) } >
        <div className="TodoItem__text">
          <div className="TodoItem__name">{ this.props.todo.text }</div>
        </div>
        <div className="TodoItem__delete">
          <div className="icon" onClick={ (event) => this.deleteTodo(event) }></div>
        </div>
      </div>
    );   
  }

}

const mapStateToProps = (state) => {  
  return {
    
  }
}

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoItem);

// export default TodoItem;