import React, { Component } from 'react';

export default function TodoForm(props) {

    // addTodoHandler = e => {
    //     e.preventDefault();
    //     // this.props.addTodo(this.state.text)
    //     const { text } = this.state;
    //     const newTodo = {
    //         text,
    //         complete: false,
    //         // id: this.props.todos ? this.props.todos.length + text : 0 + text
    //     };
    //     this.props.addTodo(newTodo)
    //     this.setState({
    //         text: ''
    //     })
    // }

    // todoInput = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    //   }

    // render() {
        return (
            <div>
                 <span > {/* onSubmit={props.addTodo} */}
                    <input placeholder='Enter new task ...' value={props.inputText} onChange={props.onInputChange} />
                    <button onClick={props.addTodo} >Submit it</button>
                </span>
            </div>
        );
    // }

}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos
//     };
// };

// export default connect(mapStateToProps, { addTodo })(TodoForm);