import React from 'react'

import {connect} from 'react-redux';

class TodoItem extends React.Component {

    render() {
        return (
            <li>

                {this.props.todoName}
                {this.props.todoComplete === true ? ` True` : ` False`}
            </li>);
    }
}
// export default connect(null, (TodoItem));
export default TodoItem;