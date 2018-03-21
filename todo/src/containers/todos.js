import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/actionTodo';

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    }
  }
  
  render() {
    console.log(this.props);
    return(
      <div>

        <div>
          {this.props.todos.map((item, i) => {
            return <div>{item.value}</div>
          })}
        </div>

        <form onSubmit={this.handleSubmit} className="form" >
          <input type="text" onChange={this.handleInput} placeholder="new todo"
            value={this.state.newTodo}
          />
          <button type="submit">Add</button>
        </form>

      </div>
    );
  }
  
  handleInput = (event) => {
    this.setState({ newTodo: event.target.value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.newTodo);
    
    this.setState({
      newTodo: '',
    })
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
}


export default connect(mapStateToProps, { addItem })(Todos);