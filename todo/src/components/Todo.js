import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, toggle } from '../actions';

class Todo extends Component {
  // constructor() { 
  //   super();
  //   this.state = {
  //     value: ''
  //   }
  // }
  // changeHandler= (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     value: e.target.value
  //   })
  // }
  render() {
    // console.log(this.props)
      return(
        <div className="Todo">
          <h3> Todo </h3>
          <ul>
            {/* {this.props.todos.todos.map(el=> <li>{el}</li>)} */}
          </ul>
          <form className="manage-todo" onSubmit={(e)=>{
            // console.log(e.target[0].value)
            e.preventDefault(); 
            return this.props.add(e.target[0].value)}}>
            <input type="text" placeholder="add to do" />
            {/* <input type="checkbox" /> */}
          </form>
        </div>
      ) 
    }
  }
// }

const mapStateToProps = (state) => {
  console.log(state);
  return {
      value: state
      // index: state
  };
};
// const mapDispatchToProps = ()=> {
  
// }

export default connect(mapStateToProps, { add, toggle })(Todo);
