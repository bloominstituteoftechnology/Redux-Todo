import { connect } from 'react-redux';

const ToDolist = (props) => {
  return (
    <div>
      <h2>{props.todo}</h2>
    </div>
  )
}

export default connect()(ToDoList);