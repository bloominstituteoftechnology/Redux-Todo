import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends React.Component {

    handlerInput = (event) => {
        return event.target.value; 
    }

  render() {
    return (
        <div>
            <form onClick={() => this.props.addTodo(this.handlerInput)}>
                <input type="text" placeholder="add todo"/>
                <input type="submit"/>
            </form>
        </div>
    )
  }
}

//why do I need this?
const mapStateToProps = state => ({
    todos: state
})

export default connect(mapStateToProps, {addTodo})(AddTodo)