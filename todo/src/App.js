import React, { Component } from 'react';
import AddButton, { AddField, ListView } from './components';
import { connect } from 'react-redux';
import { add, toggle, deleteTodo, updateField } from './actions';



class App extends Component {

  handleAddTask = () => {
    this.props.add(this.props.state.field);
    this.props.updateField("");
  }

  handleTaskType = (event) => {
    this.props.updateField(event.target.value);
  }




  render() {

    return (
      <div>
        <h1>TODO</h1>
        <AddButton onClick={this.handleAddTask} />
        <AddField name="task" onChange={this.handleTaskType} value={this.props.state.field} />
        <ListView {...this.props} onClick={this.props.toggle}  onButton={this.props.deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};


export default connect(mapStateToProps, { add, toggle, deleteTodo, updateField })(App);
