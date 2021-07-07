import React from 'react';
import { addItem } from "../actions/index";
import { connect } from "react-redux";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          input: ""
        };
      }
      changeHandler = e => {
        e.preventDefault();
        this.setState({ input: e.target.value });
      };
    
      submitHandler = e => {
        e.preventDefault();
        this.props.addItem(this.state.input)
        this.setState({ input: "" });
      };
    

      render(){
    return(
        <form onSubmit={this.submitHandler}>
        <input type='text' value={this.state.input} onChange={this.changeHandler} placeholder='What now?'></input>
        <button type='submit'>add item</button>
        </form>
    )
}
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
  
export default connect(mapStateToProps, {addItem:addItem})(Form)