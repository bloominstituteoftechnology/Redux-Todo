import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { submitForm, addTodo } from './Actions';

const App = props => {
    return (
      <div className="App">
          <h1 className="App-title">Redux Todo List</h1>
		  
		{props.todos.map(item => <div key={item.value}> {item.value} </div>)}

	<form 
		onSubmit={e => {
			e.preventDefault()
			{props.submitForm()}
			}
		}
	>

		New todo: 
		<input type='text' value={props.textBox} onChange={props.addTodo} />

	</form>
		  
      </div>
    );

};

const mapTodos = state => {
	return {
		todos:state.todos,
		textBox:state.text
	};
};

export default connect(mapTodos, {submitForm, addTodo})(App);