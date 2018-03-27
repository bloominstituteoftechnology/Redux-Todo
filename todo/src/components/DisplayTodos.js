import React from 'react';
import { connect } from 'react-redux';

class DisplayTodos extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, i) => {
                    return <div key={i}>{todo.value}</div>;
                })}
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos:state 
    };
}

export default connect(mapStateToProps)(DisplayTodos);