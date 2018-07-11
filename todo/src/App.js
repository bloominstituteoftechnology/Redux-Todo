import React, { Component } from 'react';
import { dataSubmit } from './action';
import './App.css';
import { connect } from 'react-redux';

const App = props => {
    return (
	console.log(props),
      props.todos.map((todos, num) =>
	  <div className="App" key={Math.random(Date.now())}>
		  {todos.value}
			<button className="completed" onClick={() => props.dataSubmit()}>
			completed?
			</button>
      </div>
	 
    )
	);
};

const currentState = state => {
	return {
		todos:state.todos,
	};
}

export default connect(currentState, {dataSubmit})(App);
