import React from 'react';

class TodoForm extends React.Component {
    state={
        newTodo: ''
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    handleChange = e => {
        this.setState({
          newTodo: e.target.value
        })
      }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='Add Todo'
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.addTodo}>+</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;