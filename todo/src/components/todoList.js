import React from 'react';
import { connect } from 'react-redux';

class todoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index) => (
                    <todo key={index}
                        todo={todo}
                    />
                ))}
            </div>
        );
    };    
};

const mapStateToProps = state => {
    console.log('todoList - mSTP, state:', state);
    return {
        todos: state.todos,
    };
};


export default connect(mapStateToProps)(todoList);