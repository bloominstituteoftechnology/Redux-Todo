import React from 'react';
import { connect } from 'react-redux';
import {toggle_todo} from '../actions/toggle_todo';
import Item from './Item';

const ToDoList = ({ items, onToDoClick }) => {

  return(
    <ul>
      {items.map( item =>
        <Item key={item.id} {...item} onClick={() => onToDoClick(item.id)} />
      )}
    </ul>
  )
}


const mapStateToProps = (state) => {
  return {
    todo: state
  };
};

const mapDispatchToProps = {
  onToDoClick: toggle_todo
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);