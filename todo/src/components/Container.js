import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo} from './actions';

class Container extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Redux Todo List</h1>
                 <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            <li key={todo}>{todo}
                                <button onClick={() => this.props.toggleTodo()}> Completed </button>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => this.props.addTodo()}> add Todo</button>
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return { todos: state }
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(Container);