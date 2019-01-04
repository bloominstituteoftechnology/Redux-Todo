import React from 'react';

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            todoInput: '', // Controlled input, the React way.  Could likely use higher order component through Redux to avoid keeping state on component itself.
        } 
    }
    handleChange = e => {
        this.setState({ todoInput: e.target.value });
    }
    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.addTodo(this.state.todoInput);
                this.setState({ todoInput: '' });
                } }>
                <input type="text" placeholder="Todo" onChange={this.handleChange} value={this.state.todoInput} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}
export default TodoInput;