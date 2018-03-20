import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(TodoList);