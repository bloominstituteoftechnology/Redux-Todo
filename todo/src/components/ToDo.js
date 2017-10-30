import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../actions';

class ToDo extends Component {
  render() {
    let input;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.addItem(input.value);
          input.value = '';
        }}>
          <input ref={node => input = node } />
          <button type="submit">
            Add Todo
          </button>
        </form>
        toDo:
        { this.props.state.map((listItem, i) => {
          return (
            <p 
              key={ i + 1 }
              onClick={() => { this.props.removeItem(listItem.id) }}
            >
              { listItem.text }
            </p>
          ) 
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { state, };
};
export default connect(mapStateToProps, { addItem, removeItem })(ToDo);