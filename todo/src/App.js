import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { post,toggle,typing,remove } from './actions/actions';

const App = (props) => {
    return (
      <div className="App">
	  <input value={props.newTask} onChange={(e) =>props.typing(e.target.value)}/>
	  <div onClick={()=>props.post()} className="submit">
	  submit
	  </div>
	  {props.todos.map((task,index) => <div key={Math.random(Date.now())}
	   onClick={()=>props.toggle(index)}>
		  {task.value}
		  </div>
	  )}
	  <div className="submit" onClick={()=>props.remove()}>
	  remove completed
	  </div>
      </div>
    );
}

const mapToState = (props) => {
return (
{todos:props.todos,
newTask:props.newtask
}
);
}

export default connect(mapToState, { post,toggle,typing,remove })(App);
