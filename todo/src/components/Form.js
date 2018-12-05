import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  background: lightpink;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  width: 70%;
  border: none;
  color: #909;
  border-bottom: 2px solid #909;
  outline: none;
  margin-bottom: 30px;

  &::placeholder {
    color: #909;
  }
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background: #909;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  width: 20%;
  border: 1px solid #909;
  border-bottom: 2px solid #909;
  cursor: pointer;
  outline: none;
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputText !== "") {
      this.props.addTodo(this.state.inputText);
      this.setState({
        inputText: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="inputText"
          value={this.state.inputText}
          placeholder="Enter Your Todo Here..."
          onChange={this.handleChange}
        />
        <Button type="submit">Add&nbsp;A&nbsp;Todo</Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

// const withState = connect(
//   mapStateToProps,
//   {
//     addTodo: addTodo
//   }
// );

// const EnhancedForm = withState(Form);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
// export default EnhancedForm;
