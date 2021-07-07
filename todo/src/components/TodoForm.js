import React, {Component} from "react";
import {connect} from 'react-redux';
import TodoList from './TodoList';
import {add, complete} from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };

  submitHandler = (e) => {
  e.preventDefault()
  this.props.add(this.state.name)

  };

  render() {
    return (<div>
      <h1>
        DüStuf
      </h1>
      <TodoList/>
      <form onSubmit={this.submitHandler}>
        <input type="text" onChange={this.inputHandler} value={this.props.name} placeholder="add a tüdü" name="name"/>
        <button type="submit">Add</button>
      </form>
    </div>);
  }

}

const mapStateToProps = () => {
    return {}
}


export default connect(mapStateToProps, {
  add,
  complete
})(TodoForm);
