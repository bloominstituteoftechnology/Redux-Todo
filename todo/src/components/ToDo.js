import React from 'react';
import { connect } from 'react-redux';

import { add, remove } from '../actions';

class ToDo extends React.Component {
  state = {
    newTodo: {
      text: '',
      id: 1,
    },
  };

  handleChange = event => {
    const newTodoCopy = this.state.newTodo;
    newTodoCopy.text = event.target.value;
    this.setState(newTodoCopy);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo.text}
          type="text"
        />
        <button
          onClick={() => {
            this.props.add(this.state.newTodo);
            const newID = this.state.newTodo.id + 1;
            this.setState({
              newTodo: {
                text: '',
                id: newID,
              },
            });
          }}
        />
        <ul>
          {this.props.todo.map(x => {
            return (
              <li key={x.id} onClick={() => this.props.remove(x.id)}>
                {x.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state,
  };
};

export default connect(mapStateToProps, { add, remove })(ToDo);
