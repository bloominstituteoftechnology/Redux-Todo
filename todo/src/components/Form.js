import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from './actions'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            todo: ""
        }
    }

    inputHandler = event => {
        this.setState({todo:event.target.value});
        console.log(this.state.todo)
    };

    formSubmitHandler = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo);
    };

    render() {
        return(
            <form onSubmit={this.formSubmitHandler}>
                <h1>Todo List</h1>
                <input
                type="text"
                value={this.state.todo}
                onChange={this.inputHandler}/>
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {};
}

export default connect(mapStateToProps, {addTodo} )(Form)