import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'


const AddTodo = ({ dispatch }) => {


    return (
        <>
            <form>
                <input/>
                <button type="submit">Add Todo </button>
            </form>
            </>
    )


}

export default connect()(AddTodo)