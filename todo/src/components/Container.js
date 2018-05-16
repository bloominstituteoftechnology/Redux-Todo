import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo} from './actions';

import TodoInput from './TodoInput';


class Container extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                 <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            <li key={todo}>{todo}
                                <button onClick={() => this.props.toggleTodo()}> Completed </button>
                            </li>
                        )
                    })}
                </ul>
                <TodoInput />
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return { todos: state }
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(Container);