import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import submitOrDie from './actions';

const App = props => {
	console.log(props)
    return (
      <div className="App">
          <h1 className="App-title">Todo List</h1>
		  
{props.todos.map(item => <div key={Math.random(Date.now())}> {item.value} </div>)}

	<form onSubmit={submitOrDie}>
	<label>
	New todo: 
	<input type='text' todo='todo' />
	</label>
	</form>
		  
      </div>
    );

};

const mapThingy = state => {
return {
	todos:state.todos,
	newTodo:state.newTodo
	};
};

export default connect(mapThingy, submitOrDie)(App);