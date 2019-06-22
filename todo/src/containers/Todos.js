import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleInputChange = e =>{
        this.setState({ [e.target.name]: e.target.value})
    };
    

    handleAddTodo = () => {
        const todo ={
            title: this.state.title,
            completed: false,
            id: Date.now()
        };
        this.props.addTodo(todo);
        this.setState({title: ''});
    };

    handleToggle = id => {
        this.props.toggleTodo(id);
    };

    render() {
        const { todos } = this.props;
        return(
            <div> 
                <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>
                {todos.map(item =>{
                    return (
                        <div key={item.id}>
                        <div> {item.title} </div>
                        <div> Completed: {item.completed.toString()}</div>
                        <button onClick={() => this.handleToggle(item.id)}>
                        Complete 
                        </button>
                        </div>
                    )
                })}


            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        todos: state
    };
};

export default connect(
    mapStateToProps,
    {addTodo, toggleTodo}
)(Todos);