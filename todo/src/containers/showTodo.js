import React from 'react';
import { connect } from 'react-redux';

class showTodo extends React.Component {
  
  render() {
    return (
     <div>
      <ul>
        <li>
        </li>
      </ul>
     </div>
    );
  }
  
  const mapStateToProps = (state) => {
    return todos: state.todos;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(showTodo);