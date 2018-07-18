import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import submitOrDie from './actions';

const App = props => {
let input;
    return (
      <div className="App">
          <h1 className="App-title">Todo List</h1>
		  
{props.todos.map(item => <div key={Math.random(Date.now())}> {item.value} </div>)}

	<form onSubmit={e => {e.preventDefault()
								{props.submitOrDie(input.value)}}}>

	New todo: 
	<input type='text' ref={node => input = node} />

	</form>
		  
      </div>
    );

};

const mapThingy = state => {
return {
	todos:state.todos,
	};
};

export default connect(mapThingy, {submitOrDie})(App);