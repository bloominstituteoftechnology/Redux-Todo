import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions";

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: "",
        }
    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
      };


      handleClick = ev => {
        ev.preventDefault();
        console.log("Button clicked");
        this.props.addTodo(this.state.todoText);
      };

    render() {
        return (
            <div>
                <form onSubmit= {ev => {
                    ev.preventDefault()
                    addTodo(this.props.value);
                }}>
                    <input 
                        onChange={this.handleChanges} 
                        type="text" 
                        name="todoText"
                        placeholder="Enter new Todo"
                        value={this.state.todoText}
                        />
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        );    
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
  };

export default connect(mapStateToProps, { addTodo })(AddTodo);