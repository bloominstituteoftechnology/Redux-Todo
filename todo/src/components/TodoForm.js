import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const StyledForm = styled.form`
  width: 50%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  padding: 10px 5px;
  width: 100%;
  border-radius: 5px;
`;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({inputText: ''});
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    //console.log('form', this.props);
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="add a todo"
          onChange={this.handleChange}
          name="inputText"
          value={this.state.inputText}
        />
      </StyledForm>
    );
  }
}

//const mapStateToProps = state => {
//return {
//todos: state.todos,
//};
//};

// this isn't working. why?
const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoForm);

//export default connect(
//{},
//{addTodo},
//)(TodoForm);
