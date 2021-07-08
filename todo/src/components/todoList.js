import React, { Component } from 'react';

export default function TodoList(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ''
    //     };
    // }

    // handleTodoComplete = todoIndex => {
    //     this.props.toggleComplete(todoIndex);
    //   };

    // render() {
        return (
            <div>
                <ul>
                    {props.todos.map((todo, index) => (
                    <li key={index} 
                    onClick={() => props.toggleCompleted(index)} style={{textDecoration: todo.completed ? "line-through" : "none"}} >{todo.value}</li>
                    ))}
                </ul>
            </div>
        )
    // }
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     };
// };

// export default connect(mapStateToProps, { toggleComplete })(TodoList);