import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
                inputValue: ""
            }
        }
    


    render() {
        return (
            <div>
                <form onSubmit={this.createNewTodo}>
                    <input
                        type= "text"
                        value = {this.state.inputValue}
                    />
                </form>
                <button type="submit">Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todos
    }
}

export default connect(mapStateToProps)(ToDoList);