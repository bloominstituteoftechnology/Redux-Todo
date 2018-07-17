import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return ( 
            <div>
                {this.props.state.map()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state,
    }
}
 
export default connect(mapStateToProps, {  })(TodoList);