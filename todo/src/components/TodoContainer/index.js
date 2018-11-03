import React from 'react';
import TodoForm from '../TodoForm';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';


class TodoContainer extends React.Component {
  toggleTodo = (e) => {
    e.preventDefault();
    this.props.toggleTodo(e.target.innerHTML);
  }

  render() {
    return (
      <div className='container'>
        <ul>
          {
            this.props.todos.map((todo,index) => <li key={todo.value}
                                      onClick={this.toggleTodo}
                                      style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none'
                                      }}>{todo.value}
                                    </li>)
          }
        </ul>
        <TodoForm/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { toggleTodo })(TodoContainer);
