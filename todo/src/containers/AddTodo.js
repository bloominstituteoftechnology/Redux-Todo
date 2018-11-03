import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'; 

// what is dispatch doing here
const AddTodo = ({ dispatch }) => {
    let input   //what does this do?

//replaced by <input ref={node => input = node} />
    // const inputHandler = event => {
    //     // this.setState({ [event.target.name.value]: event.target.value });
    //     this.setState({ [event.target.name]: event.target.value });
    // }


//replaced by event => dispatch
    // const formSubmitHandler = event => {
    //     event.preventDefault();
    // // this.props.updateTodoAction(this.state.name.value);
    //     this.props.updateTodoAction(this.state.name);
    // }

    return (
        // <form onSubmit={formSubmitHandler}>
        <form onSubmit={event => {
            event.preventDefault();
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <input ref={node => input = node} />
                {/* <input 
                  placeholder="some text"
                  type="text"
                  name="name"
                  // value={this.state.name.value}   //change name -> name.value; doesn't break when type
                  value={input.value}
                  onChange={inputHandler}
                /> */}
                <button type="submit">submit</button>
        </form>
    )
}

export default connect()(AddTodo)