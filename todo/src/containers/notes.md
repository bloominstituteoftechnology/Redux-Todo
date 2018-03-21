Actions:
```export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';

export const add_list_item = (newTodo) => {
  return {
    type: ADD_LIST_ITEM,
    newTodo: newTodo
  };
}```


TodoList:


```import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_list_item } from '../Actions';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
  }

  handleNewItem = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  submitter = event => {
    event.preventDefault();
    this.props.add_list_item(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  };

  handleClick

  render() {
    return (
      <div>
        <form>
          <ul>
            {this.props.todos.map((todo, index) => {
              return <li onClick={this.handleClick}>{todo.value}</li>;
            })}
          </ul>
          <input
            type="text"
            onChange={this.handleNewItem}
            placeholder="Add a new todo"
            value={this.state.newTodo}
          />
          <button onClick={this.submitter}>ADD TODO</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { add_list_item })(TodoList);```


Reducers:
```import { ADD_LIST_ITEM } from '../Actions';

const initialState = [
  { value: 'Go to supermarket' },
  { value: 'Go to get car fixed' }
];
export default (todos = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return [...todos, { value: action.newTodo }];

    default:
      return todos;
  }
};```