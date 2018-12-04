import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  changeHandler = ev => {
    ev.preventDefault();

    this.setState({
      text: ev.target.value
    });
  };

  submitAdd = ev => {
    ev.preventDefault();

    this.props.addTodo(this.state.text);
  };

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.submitAdd}>
          <input
            required
            type="text"
            name="todo"
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <button className="btn" onClick={this.submitAdd}>
            Add
          </button>
          <button
            className="btn clear-btn"
            onClick={() => this.props.removeCompleted(this.props.todos)}
          >
            Clear
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
