import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add_list_iteam} from'../Actions';
import {Check_complete} from'../Actions';
import {REMOVE_LIST_ITEAM} from '../Actions';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.yes = this.yes.bind(this);
		this.submitter = this.submitter.bind(this);

		this.state = {
			newIteam: ''

		};
	}

	yes(event) {
     this.setState({ newIteam: event.target.value });
	}
	submitter(event) {
		event.preventDefault();

		this.props.add_list_iteam(this.state.newIteam);

		this.setState({ newIteam:''});
	}
	completer(event) {}
	render() {
		return (
			<div>
             <ul>

             {this.props.todos.map((todo, index) => {
             	return(
             	<div>
             	<span key={index} onClick={() => this.props.Check_complete (todo.value)}>
             	{todo.value} {Number(todo.isComplete)}
             	</span>

             	<span onClick={() => this.props.remove_list_iteam(todo.value)}> x </span>

             </div>
             	)
             })}
             </ul> 
             <form onSubmit={this.submitter}>
             <input onChange={this.yes} type="text" placeholder="today i have....!" value={this.state.newIteam}></input>
             </form>
			</div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state
	}
}
export default connect(mapStateToProps, {add_list_iteam, Check_complete})(TodoList);




