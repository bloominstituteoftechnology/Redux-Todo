import React from 'react';
// import {connect} from 'react-redux'

class TodoItem extends React.Component{
    render(props){
        console.log(this.props)
        return(
            <li onClick={()=>this.props.toggleTodo(this.props.todo)}>{this.props.todo.value}</li>
        )
    }
}

export default TodoItem