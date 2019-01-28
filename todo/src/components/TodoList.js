import React from 'react'
import {connect} from 'react-redux';
import TodoItem from './TodoItem'
import {addNewTodo} from '../actions'

class TodoList extends React.Component{
    render(props){

        return(
            <div>
                {this.props.todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.value}/>
                })}
                <input type="text"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
      todos: state.todos
    };
  };

  export default connect(
      mapStateToProps,
      {addNewTodo}
  )(TodoList);
