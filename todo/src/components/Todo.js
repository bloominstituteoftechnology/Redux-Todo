import React from "react";
import { connect } from "react-redux";
import { COMPLETED_ITEM } from "../actions/COMPLETE_ITEM";

function Todo(props) {
	return (
		<li id={props.id} onClick={() => props.COMPLETED_ITEM(props.id)}>
			{props.todo.value}
			{console.log(props)}
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
