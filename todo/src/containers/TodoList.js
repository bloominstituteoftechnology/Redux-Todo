import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul className='todo-list'>
                    {this.props.todos.map(list => <li key={list}>{ list }</li>)}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
      todos: state
    }
}

export default connect(mapStateToProps)(TodoList);