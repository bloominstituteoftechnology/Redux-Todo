import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
         newToDo: '',
        }
    }

    onChange = (e) => {
        this.setState({newToDo: e.target.value})
    }
    render() {
        return (
            <div>
               <form onSubmit={(e)=>{this.props.addToDo(this.state.newToDo, e)}}>
                <input onChange={this.onChange} value={this.state.newToDo} placeholder='What to do?' type="text" />
                <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addToDo })(TodoForm);
