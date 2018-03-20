import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.posts.map(((posts, index) => {
                    return (
                        <div key={`${posts.text}${index}`}>
                            <h1>{posts.text}</h1>
                        </div>
                    )
                }))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        posts: state,
    }
}

export default connect(mapStateToProps)(TodoList);