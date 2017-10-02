import React, { Component }from 'react';
// import connect from react-redux
import { connect } from 'react-redux';
// import your actions
import { addTodo } from '../actions';

class Todo extends Component {
	// constructor() {
	// 	super();
	// }

	// want to render its html
	render() {
		return(
			<input type='text' placeholder='add todo...' />
		)
	}
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

// want to connect this component to the rest of the redux app
export default connect(mapStateToProps, { addTodo })(Todo);