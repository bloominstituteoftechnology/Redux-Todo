import React from 'react'

class Todo extends React.Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                <p>{this.props.todo.value}</p>
            </div>
        )
    }
}

export default Todo;