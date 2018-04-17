import React from 'react'
import {connect} from 'react-redux';
import {getTodos} from '../actions';
import {bindActionCreators} from 'redux'
import TodoItem from './TodoItem'
import './TodoItem.css'
class TodoItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <ul className='Todoitem'>
                    {this.props.todos.map((todo, index) => {
                        console.log(todo);
                       return <TodoItem key={index} todoName={todo.value} todoComplete={todo.completed}/>
                    })}
                </ul>
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getTodos: getTodos}, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps ) (TodoItemList);