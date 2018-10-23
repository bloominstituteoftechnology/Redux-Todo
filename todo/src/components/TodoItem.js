import React from 'react';
import { connect } from 'react-redux';

const TodoItem = props => {
    return (
        <form>
            <input type='text' placeholder='What to do?' />
            <button>ADD</button>
        </form>
    );
}


export default connect(null)(TodoItem);