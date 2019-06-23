import React from 'react';
// import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }


  hydrateStateWithLocalStorage = e => {
    for (let key in this.state) { // key is text
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      localStorage.setItem('todos', JSON.stringify(nextProps.todos));
    }
  }

  render() {
    return (
      <div className='TodoListContainer'>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default TodoListContainer;