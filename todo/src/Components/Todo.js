import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const completedStyle = {
  background: '#BDBDBD',
  textDecoration: 'line-through'
}

const Todo = (props) => {
  return (
    <ListItem
      button
      style={props.todo.completed ? completedStyle : {}}
      onClick={props.toggle}>
      <Checkbox
        checked={props.todo.completed}/>
      <ListItemText primary={props.todo.text}/>
      <ListItemSecondaryAction>
        <IconButton onClick={props.remove}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
