import React, { Component } from "react";
import { add, complete } from "./actions";
import { connect } from "react-redux";
import "./App.css";
import ListGen from "./ListGen";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
      complete: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Todo List App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Todo:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ListGen list={this.props.todo} complete={this.props.complete}/>
      </div>
    );
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({ value: "", complete: false });
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStateToProps, { add, complete })(App);
