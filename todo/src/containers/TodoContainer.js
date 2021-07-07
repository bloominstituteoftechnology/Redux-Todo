import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions';

class ToDoContainer extends Component{
    constructor(){
        super();
        this.state= {
            newTodo:""
        };
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    addTodoHandler = (e) => {
        e.preventDefault();
        this.props.addTodoOnProps(this.state.newTodo);
        this.setState({newTodo: ""});
    };

    render() {
        return (
            <div> 
            <TodoList 
                    todos={this.props.todos} 
            />
            <AddTodo     
                    addTodoInput={this.state.newTodo}           
                    addTodoHandler={this.addTodoHandler}
                    inputChangeHandler={this.inputChangeHandler}
            />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    {addTodoOnProps: addTodo}
)(ToDoContainer);