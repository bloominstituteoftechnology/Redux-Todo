import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleItem } from '../actions';

const TodoList = ({ itemList, toggleItem }) => (
  <ul>
    {itemList.map(item =>
      <Todo key={item.id} {...item} onClick={() => toggleItem(item.id)} />
    )}
  </ul>
);

const mapStateToProps = (state) => ({
  itemList: state
})

const mapDispatchToProps = (dispatch) => ({
  toggleItem: (id) => dispatch(toggleItem(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
