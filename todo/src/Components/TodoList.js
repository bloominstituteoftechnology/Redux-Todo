import React, { Component } from  'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { addTodo } from '../Actions/Index.js';


class TodoList extends Component {
    state = {
        Input: '',
    }

    handleInput = (event) => {
        const input = event.target.value;
        this.setState({
            Input: input,
        })
    }

    LineThrough = (i) => {
        let Arr = this.state.Input;    
        Arr[i].completed = !Arr[i].completed
        this.setState( {Input: Arr} )
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.Input);
        this.setState({
            Input: '',
        });
    }

    render() {
        return (
            <div className="Todos">
                {this.props.Todos.map((todo, index) => <Todo key={index} todo={todo} index={index} LineThrough={this.LineThrough} toggle={this.toggle} />)}
                <div className="ADD">
                    <input onChange={this.handleInput} value={this.state.Input} type="text" placeholder="INCREASE TODOS"  />
                </div>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        );
    }
};

const mapStatesToProps = (state) => {
    return { 
        Todos: state,
    };
};

export default connect(mapStatesToProps, {addTodo})(TodoList); 