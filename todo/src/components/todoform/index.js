import React from 'react';

export default class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="todoform" placeholder="What's on the Agenda?" />
        <button>Add Todo</button>
      </div>
    );
  }
}