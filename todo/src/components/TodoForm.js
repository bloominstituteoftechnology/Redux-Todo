import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={(event) => {event.preventDefault(); this.props.addTodoHandler(this.state.value)}}>
                    <input type="text" name="value" value={this.state.value} placeholder="What to do?" onChange={this.changeHandler}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => ({
    addTodoHandler: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);