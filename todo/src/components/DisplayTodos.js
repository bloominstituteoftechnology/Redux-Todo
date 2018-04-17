import React from 'react';
import { connect } from 'react-redux';



const DisplayTodos = () => {
    return (
        <div>
            <ul>
                <li>lol</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps)(DisplayTodos);