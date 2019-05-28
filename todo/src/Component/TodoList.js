import React, { Component } from "react"
import './component.css';
import { connect } from 'react-redux';
import { addTodoList } from '../Actions'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    changeInputValue = e => {
        this.setState({ inputValue: e.target.value });
    }

    createList = e => {
        e.preventDefault();
        this.props.addTodoList(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    toggle = e => {
        console.log('I just clicked')
    }

    render() {
        return (
            <div className="addlist">
            
            <h1>ADD LIST</h1>
            <div>
                
                <div>
                    {this.props.todos.map((i, index) => (
                        <div key={index} onClick={this.toggle}>{i.name}</div>
                    ))}
                </div>
                <form  className='todolist' onSubmit={this.createList}>
              
                <div>
                    <input className="input" type="text"
                        value={this.state.inputValue}
                        placeholder="Add Task"
                        onChange={this.changeInputValue} />
                        
                    <button className="button" type="submit" >Add todoList</button>
                    </div>
                </form>
            </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodoList: addTodoList })(TodoList);