import React from 'react';

import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewTodo: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  updateTodo(e) {
    this.setState({
      NewTodo: event.target.value
    });
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.NewTodo,
      completed: false
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input onChange={this.updateTodo} placeholder="Add To List" value={this.state.NewTodo} />
        </form>
        <List todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addEvent })(App);
