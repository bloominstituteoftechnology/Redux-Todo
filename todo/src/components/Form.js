import React from 'react';
import { connect } from 'react-redux';
import add_todo from '../actions/add_todo';

class Form extends React.Component {
  state = {
    text: ''
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault();
        this.props.add_todo(this.state.text);
        this.setState({ text: '' });
      }}>
        <input type="text" value={this.state.text} onChange={(event) => {this.setState({ text: event.target.value })}} />
        <button type="submit">
          Add To List
        </button>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps,{add_todo})(Form);
