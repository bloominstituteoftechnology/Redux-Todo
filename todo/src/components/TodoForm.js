import React from 'react';

class TodoForm extends React.Component {
  state = {
    text: '',
    checked: false,
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = e => {
    console.log('submitted')
    e.preventDefault();
    this.props.handleSubmit({
      value: this.state.text,
      completed: this.state.checked
    });
    this.setState({
      text: '',
      checked: false,
    })
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} type="text"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;