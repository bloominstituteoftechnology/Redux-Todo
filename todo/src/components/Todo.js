import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'

class Todo extends React.Component {
    state = {
        todo: ["Learn Redux"]
    };

    addTodoList = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({todo: ["Learn Redux"]})
    }

    render() {
        return(
        <div>
            <form>
                <input placeholder="Insert Todo"></input>
                <button type="submit" onClick={this.props.addTodo}>Add</button>
            </form>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, { addTodo })(Todo);