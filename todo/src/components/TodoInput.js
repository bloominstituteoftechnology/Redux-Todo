import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from  '../actions/indexAction'

class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
    }

    changeValue = event => {
        this.setState({
            inputVal: event.target.value
        });
    };

    addTodo = event => {
        event.preventDefault();
        this.setState({inputVal: ''})
        this.props.addTodo(this.state.inputVal)
        
    };

    render(){
        return (
            <form onSubmit={this.addTodo}>
                <input 
                type="text"
                value={this.state.inputVal}
                onChange={this.changeValue}
                />
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo: addTodo})(TodoInput);