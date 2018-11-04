import React, { Component } from "react";
import {connect} from '../node_modules/react-redux';
import Todo from "../Todo/Todo";
// import { increment, decrement } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            text = '',
            }
        }

    // functions go here
    // needs: onClick={addTodo} which is an event and adds the input/text to state
    // also needs an eventHandler which does the e.target.name === e.target.value thing.


     // render goes here
    render() {
        return(
            <div>
                <p>foo</p>
                <p>bar</p>
                {props.TodoList.map(newTodo => {
                    return (
                        <Todo
                        key={newTodo.id}
                        value={newTodo}
                        handleClick={props.handleClick}
                        />
                    )
                })}
                <button onClick={}>Add to-do</button>
            </div>
        )
        }
    }

// export default connect(mapStateToProps, {} (TodoList))