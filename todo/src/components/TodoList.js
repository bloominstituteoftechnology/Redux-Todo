import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {completedTodo} from './../actions/index';
import { bindActionCreators } from 'redux';

class TodoList extends React.Component {

    render() {
    return (
        <div>{console.log(this.props.todoList)}
        
             {this.props.todoList.map(item => {
          return <div key={item} item={item.value} onClick={() => this.props.completedTodo()}><Todo item={item.value} /></div>
        })}
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({completedTodo: completedTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);