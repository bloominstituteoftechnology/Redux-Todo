import React from 'react';
import { connect } from 'react-redux';



const mapStateToProps = state => ({
    todoList: state.todoList,
})

const AddTodo = props => {
    return(
        <div>
            <form>
                <input type='text' placeholder="Input todo..." />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default connect ()(AddTodo);
