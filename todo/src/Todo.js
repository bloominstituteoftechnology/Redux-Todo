import React from 'react';
import {render} from "react-dom";
import {connect} from "react-redux";//with connect we got all the event handlers
import {clickTodo} from "./actions";


class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo,
            completed: false,
            //id : props.todo.id ? props.todo.id : 1
            id: props.todo.id
        }
    }

    todoClickFn=() =>{

        this.props.clickTodo(this.state.id)
        this.setState({completed:true})
    }

    render() {

        if (this.state.todo.completed == true) {
            return <div style={{ textDecoration: 'line-through'}}
                        onClick={this.todoClickFn}> {this.state.todo.todo} </div>
        } else {
            return <div onClick={this.todoClickFn}> {this.state.todo.todo} </div>
        }
    }
}

function mapStateToProps(state){
    return {}

}

export default connect(mapStateToProps,{clickTodo:clickTodo})(Todo)
