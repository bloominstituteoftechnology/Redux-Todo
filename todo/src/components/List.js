import React from 'react';

import { connect } from 'react-redux';



class List extends React.Component {
  state = {
    NewTodo: ""
  };
}
updateTodo(e) {
  this.setState({
    NewTodo: todo.target.value
  });
}

addTodo(e) {
  e.preventDefault();
  this.props.addTodo({
    value: this.state.NewTodo,
    completed: false
  })
}

render() {
  return (
    <div className="App">
      <form onSubmit={this.addTodo}>
        <input onChange={this.updateTodo} placeholder="Add To List" value={this.state.NewTodo} />
      </form>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    todosOnProps: state.todos
  }
}

export default connect(mapStateToProps, { List })(App);
