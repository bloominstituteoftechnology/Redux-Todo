import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {store} from '../index'; // can i avoid this? is this bad?

const StyledForm = styled.form`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
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
    store.dispatch(addTodo(this.state.inputText));
    this.setState({inputText: ''});
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    //console.log('form', this.props);
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
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

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoForm);

//export default connect(
//{},
//{addTodo},
//)(TodoForm);
