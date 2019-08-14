import React from "react";
import { connect } from "react-redux";
 import { newTodo } from "./actions";


export class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
     inputHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.newTodo(this.state.name)
        this.setState({name: ''})
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.name} placeholder='Todo' onChange={this.inputHandler} />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}
 const mapStateToProps = state => {
  return { todos: state.todos };
};
 export default connect(
  mapStateToProps,
  { newTodo }
)(TodoForm)