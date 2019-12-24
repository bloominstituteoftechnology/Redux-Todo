import React from 'react';
import { connect } from 'react-redux';       //dispatch communicates with the store in redux
import { addTodo } from '../actions';        //addTodo function is an action-creators

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
            // if (!input.value.trim()) {    // not sure what this does
            //     return
            // }
            dispatch(addTodo(input.value))      //text input does not get added to addTodo without this line
            input.value = ''                    // clear input field after submit
        }}>
            <input placeholder="some text" ref={node => input = node} />   {/* dispatch function above does not work without this line */}
                {/* <input 
                placeholder="some text"
                type="text"
                name="name"
                // value={this.state.name.value}   //change name -> name.value; doesn't break when type
                value={input.value}
                onChange={inputHandler}
                /> */}
                <button type="submit">submit</button>     {/* does not need type="submit" */}
        </form>
    )
}

export default connect()(AddTodo)     // dispatch function above only works with 'connect()'; dispatch(addTodo) is the KEY here
