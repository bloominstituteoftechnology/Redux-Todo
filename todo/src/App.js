import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './actions'
import { bindActionCreators } from 'redux';
import AddToDo from './components/AddToDo';
import List from './components/List';

class App extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.add(e.target.input.value);
    e.target.input.value = '';
  }

  render() {
    return (
      <div>
        <AddToDo handleSubmit={this.handleSubmit.bind(this)} />
        <ol>
          {this.props.todos.map((todo, i) => {
            return <List 
              key={i} 
              todo={todo.text} 
              id={todo.id} />
          })}
        </ol>
      </div>
    )
  }
}

const mapStateToProps =(state) => {
  return {
    todos: state.todos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);