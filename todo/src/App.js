import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { submitOrDie, changeText } from './actions';

const App = props => {
    return (
      <div className="App">
          <h1 className="App-title">Todo List</h1>
		  
{props.todos.map(item => <div key={Math.random(Date.now())}> {item.value} </div>)}

	<form onSubmit={e => {e.preventDefault()
						 {props.submitOrDie()}}}>

	New todo: 
	<input type='text' value={props.textBox} onChange={props.changeText} />

	</form>
		  
      </div>
    );

};

const mapThingy = state => {
return {
	todos:state.todos,
	textBox:state.textBox
	};
};

export default connect(mapThingy, {submitOrDie, changeText})(App);