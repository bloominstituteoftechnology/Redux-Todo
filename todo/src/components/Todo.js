import React from "react";
import { connect } from "react-redux";
import { COMPLETED_ITEM } from "../actions/COMPLETE_ITEM";

function Todo(props) {
	return (
		<li onClick={() => props.COMPLETED_ITEM(props.todo.completed)}>
			{props.todo.value}
			{console.log(props.todo)}
		</li>
	);
}
const mapStateToProps = state => ({
	completed: state.completed
});
export default connect(
	mapStateToProps,
	{ COMPLETED_ITEM }
)(Todo);
