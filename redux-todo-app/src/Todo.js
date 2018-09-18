import React from "react";
import {connect } from 'react-redux';
import { updateItem, deleteItem } from './actions';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      update: '',
      showForm: false,
      completed: false,
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h4 style={this.state.completed ? {textDecoration: 'line-through'} : {}}>{this.props.item}</h4>
        <button onClick={() => this.props.deleteItem(this.props.item)}>Delete</button>
        <button onClick={() => this.setState({showForm: !this.state.showForm})}>Toggle Update Form</button>
        <button onClick={() => this.setState({completed: !this.state.completed})}>Completed</button>
        {this.state.showForm ? 
          <div style={{margin: '20px'}}>
            <input name="update" onChange={this.handleOnChange} defaultValue={this.props.item} type="text"/>
            <button type="submit" onClick={() => this.props.updateItem(this.props.item, this.state.update)}>Update</button>
          </div>
          : null
          
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, {updateItem, deleteItem})(Todo);