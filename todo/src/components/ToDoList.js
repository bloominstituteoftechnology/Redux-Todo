import React from 'react'
import { connect } from 'react-redux'
import { addItem, toggleCompleted } from '../actions'

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }


    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleAddTask = event => {
        event.preventDefault();
        console.log("button clicked")
        this.props.addItem(this.state.value);
    }

    toggleCompleted = task => {
        this.props.toggleCompleted(task)
    } 


    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                {this.props.items.map(item => (
                    <h2 onClick={item => this.toggleCompleted(item)} 
                    key={item.value}
                    style={{textDecoration: this.props.items.completed ? 'line-through' : 'none'}}
                    >{item.value}</h2>
                ))}
                <form onSubmit={this.handleAddTask}>
                    <input type="text" 
                    name="value" 
                    onChange={this.handleChanges} 
                    placeholder="New To-do Item"
                    value={this.state.value}
                    />
                    <button>Add Item</button>    
                </form>
                
            </div>
            
        )
    }
    
}

const mapStateToProps = state => {
    return {
        title: state.title,
        items: state.items
    }
}

export default connect(
    mapStateToProps, 
    {addItem, toggleCompleted},
    )(ToDoList)