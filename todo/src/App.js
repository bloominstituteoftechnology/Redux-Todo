import React, { Component } from "react";
import { connect } from "react-redux";
import Todos from "./components/todos";
import { add, handleChange } from "./actions";

class App extends Component {
  render() {
    const { input, add, handleChange } = this.props;
    return (
      <div>
        <input
          name="input"
          type="text"
          value={input}
          onChange={e => handleChange(e.target.value)}
        />
        <button onClick={() => add(input)}>Add</button>
        <Todos />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { input } = state;
  return {
    input
  };
};

export default connect(mapStateToProps, { add, handleChange })(App);
