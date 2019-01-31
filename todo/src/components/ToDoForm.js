import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToDo } from '../actions';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleClick = e => {
    e.preventDefault();

    const id = this.generateID();

    this.props.addToDo(this.state.input, id)
    this.setState({ input: '' });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  generateID = () => {
    const index = this.props.todos.length-1;

    return !this.props.todos[index] ? 0 : this.props.todos[index].id+1
  }

  render() {
    return(
      <div className='form-container'>
        <div className='form-container__text'>
          <h1>What Do You Need To Do Today?</h1>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        </div>

        <form className='form-container__form'>
          <p className='input--wrapper'>
            <input type='text'
                   name='input'
                   placeholder='Add To Do Item'
                   value={this.state.input}
                   onChange={this.handleChange}
                   />
          </p>

          <div>
            <button onClick={this.handleClick}>Add Item</button>
            <Link to='/list'><button>View List</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addToDo })(ToDoForm);
