import React from 'react';
import { connect } from 'react-redux';
import { onChange } from '../Actions/';

const TodoForm = props => {
    return (
        <form>
            <input 
                type='text' 
                placeholder='Todo' 
                value = {props.todo}
                onChange = {props.onChange}
            />
            <button>Submit</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}


export default connect(mapStateToProps, {onChange})(TodoForm);