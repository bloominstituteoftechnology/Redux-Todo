import React from 'react';
import {connect} from 'react-redux';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTask: ''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <div>
                <input name="todo" placeholder="Add to do item(s) here" onChange={this.handleChange}></input>
                <button>Submit</button>
                <ul>
                    {/* {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))} */}
                </ul>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        todos: state.todo
    }
};

export default connect(mapStateToProps)(Todo);