import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    changeInputValue = e => {
        this.setState({ inputValue: e.target.value })
    }
    createNewTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState({ inputValue: '' })
    }
    render() {
        return(

            <div>
                <form onSubmit={this.createNewTodo}>
                    <input 
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.changeInputValue}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }    
}

const mstp = () => {
    return {}
}

export default connect(
    mstp, 
    { addTodo: addTodo }
)(TodoForm);
