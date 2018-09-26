import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { bindActionCreators } from 'redux';

//a submit button and input form, stateless w/ action = ADD_TODO
class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    handleInputChange = event => {
        this.setState({ todotext: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>My Todo List!</h1>
                <div className="theTodoListBox">
                    <form>
                        <input
                            onChange={this.handleInputChange}
                            placeholder="what are we doing?..."
                            value={this.state.todotext}
                            name="todoItem"
                        />
                        <button type="button" onClick={() => { this.props.addTodo(this.state.todotext); this.setState({todotext: ""})}}>
                        adding Stuff
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
 const mapDispatchToProps = (dispatch) => {
     return bindActionCreators({
         addTodo
     }, dispatch)
 }   

export default connect(null, mapDispatchToProps)(AddTodo);