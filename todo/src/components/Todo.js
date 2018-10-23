import React from 'react';
import {connect} from 'react-redux';
import { addTodo, crossOut } from '../actions'
class Todo extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        inputText: '',
      }
  }
// I need the list of todo items.

  render() {
    return (
      <div>
        {console.log(this.props)}
        <form>
          <p>Add New Item</p>
          <input
            type='text'
            name='inputText'
            placeholder="new list item"
            ></input>
          <button>Submit</button>
        </form>
        {this.props.todos.map(item => <p>{item.value}</p>)}
      </div>
      );
  }
}


const mapStateToProps = state => {
  return {
   todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, crossOut})(Todo);
