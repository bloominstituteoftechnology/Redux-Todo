import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newValue } from './actions';

class TodoForm extends Component {

constructor(props) {

  super(props);
  this.state = {
  todo: "",
  }
}


addHandler = (e) => {
    this.setState({
        todo: e.target.value,
    })
 }


submitHandler = (e) => {
  e.preventDefault();
 this.props.newValue(this.state.todo);
 this.setState({
   todo: "",
 })
}



  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input value={this.state.todo} onChange={this.addHandler}></input>
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
