import React, {Component} from 'react';

import Todo from './Todo';

// const Todos = props => {

class Todos extends Component {
    render() {
        console.log(this.props);
        return(
            <ul>
                {this.props.todos.map(todo => {
                    console.log(todo);
                    return <Todo key={todo.id} todo={todo} />
                })};
            </ul>
        );
    }
}

export default Todos;