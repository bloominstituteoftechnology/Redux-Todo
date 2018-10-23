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
  changeHandler = (e) => {
    this.setState({inputText: e.target.value})
  }

  handleNewItem = (e) => {
    e.preventDefault()
    console.log('button clicked')
    this.props.addTodo(this.state.inputText)
    this.setState({inputText: ''})
  }

  crossOut = (e, id) => {
    e.preventDefault();
    this.props.crossOut(id)

  }

  render() {
    return (
      <div>
        <form>
          <p>Add New Item</p>
          <input
            type='text'
            name='inputText'
            placeholder="new list item"
            onChange={this.changeHandler}
            value={this.state.inputText}
            ></input>
          <button onClick={this.handleNewItem}>Submit</button>
        </form>
        {this.props.todos.map((item, idx) => (<p 
              onClick={(event)=> this.crossOut(event, idx)} className={ item.completed ? 'crossed-out' : 'normal'} key={idx}>{item.value}</p>))}
        
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
