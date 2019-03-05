import React, { Component } from 'react'

class TodoFilter extends Component {

    toggleFilteredTodos = () => {
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleFilteredTodos}>Filter Completed Tasks</button>
            </div>
        )
    }
}

export default TodoFilter
