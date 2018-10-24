import React from 'react';
import {connect} from 'react-redux';
const TodoForm = props => {
  return (
    <div>
      <form>
        <p>Add New Item</p>
        <input
          type='text'
          name='inputText'
          placeholder="new list item"
          onChange={props.changeHandler}
          value={props.inputText}
          ></input>
        <button onClick={props.handleNewItem}>Submit</button>
      </form>
    </div>
   );
};

const mapStateToProps = state => {
  return {}
}

export default connect(null, {})(TodoForm);
