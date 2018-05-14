import React, { Component } from 'react';
import AddButton, { AddField, ListView } from './components';
import { connect } from 'react-redux';
import { add, toggle, deleteTodo } from './actions';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    }
  }

  handleAddTask = () => {
    this.props.add(this.state.task);
    this.setState({task: ""});
  }

  handleTaskType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleTaskDone = (index) => {
    this.props.toggle(index);
  }

  handleTaskDelete = (index) => {
    this.props.deleteTodo(index);
  }



  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <AddButton onClick={this.handleAddTask} />
        <AddField name="task" onChange={this.handleTaskType} value={this.state.task} />
        <ListView {...this.props} onClick={this.handleTaskDone}  onButton={this.handleTaskDelete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};


export default connect(mapStateToProps, { add, toggle, deleteTodo })(App);
