import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={() => {
          this.props.toggle(this.props.index);
        }}
      >
        {this.props.todo.text}
      </div>
    );
  }
}
