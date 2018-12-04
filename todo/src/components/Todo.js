import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import { connect } from 'react-redux';
import { add } from '../actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
	render() {
        console.log(this.props);
		return (
			<div className="container">
				<Form add={this.props.addTask}/>
                <TodoList tasks={this.props.tasks} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('working', state);
	return {
        tasks: state.tasks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: text => dispatch(add(text)),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo);
