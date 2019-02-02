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
    }
    render() {
        return(

            <div>
                <form onSubmit={this.createNewTodo}>
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.changeInputValue}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }    
}

const mstp = state => {
    return {}
}

export default connect(mstp, { addTodo: addTodo })(TodoForm)
