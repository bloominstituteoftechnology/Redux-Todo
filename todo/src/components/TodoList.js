import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'

const ToDoList = props => {
        return (
            <div>
                <form onSubmit={(event) => { props.addToDo(this.input.value); event.preventDefault()}}>
                    <label>
                        Add Item:
                    <input type="text" ref={(input) => this.input = input} />
                    </label>
                    <input type="submit" value="input" />
                    </form>
            </div>
        )
    }

export default connect(null, { addToDo })(ToDoList)