import React from 'react';
import * as actions from './actions'
import { connect } from 'react-redux';
import Todo from './components/Todo'

function App(props) {
  const {todos, addTodo} = props
    return (
      <div className="App">
        <h1>To Do List</h1>
        {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        <div>
          <input 
            type='text'
            placeholder='add todo'
            onKeyDown={e =>{
              if (e.key === 'Enter') {
                addTodo(e.target.value);
                e.target.value='';
              }
            }}
            />
        </div>
      </div>
    );
  }

const mapStateToProps = state => {
  console.log(state)
  return {
  todos: state
  }
}

export default connect(
  mapStateToProps,
  actions
)(App);
