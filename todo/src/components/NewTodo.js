import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addMyTodo} from '../actions'


class NewTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }

    handleNewTodo = (e) => {
        this.setState({newTodo: e.target.value})
    }

    addTodo = () => {
        this.props.addMyTodo(this.state.newTodo);
        this.setState({newTodo: ""})
    }

    render() {
        return (
            <div>
                 <input type="text" placeholder="add todo" onChange={this.handleNewTodo} value={this.state.newTodo}></input>
                 <button onClick={this.addTodo}>Submit</button>
            </div>
        )
    }
}





export default connect(null, { addMyTodo })(NewTodo);