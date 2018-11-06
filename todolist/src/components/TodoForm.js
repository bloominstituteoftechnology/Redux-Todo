import React, { Component } from 'react'
import {connect} from 'react-redux';
import {newValue} from './actions';

class TodoForm extends Component {

addHandler = (e) => {
    this.setState({
       todos: [{
         id: 0,
        todo: e.target.value,
       }]
    })
 }

submitHandler = (e) => {
  e.preventDefault();
 return this.props.newValue(this.state.todos);
}



  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.addHandler}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {newValue})(TodoForm)
