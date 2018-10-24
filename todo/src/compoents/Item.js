import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo} from '../actions';


class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = ev => {
        this.setState( {[ev.target.name]: ev.target.value})

    }

    handleNewTodo = ev => {
        ev.preventDefault();
        this.props.addTodo(this.state.todoText)
        this.setState({
            todoText: ''
        })
    }

    


    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => (
                    <div key={index}>
                        <h3 onClick={() => this.props.toggleTodo(index)} className={todo.completed ? 'completed' : null}>{todo.value}</h3>
                        <button onClick={() => this.props.deleteTodo(index)} >delete</button>
                    </div>
                ))}
                <input
                type='text'
                name='todoText'
                onChange={this.handleChanges}
                placeholder='New Todo'
                value={this.state.todoText} 
                />
                <button onClick={this.handleNewTodo}>Add Todo</button>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    {addTodo, toggleTodo, deleteTodo}
)(Item)