import React from 'react'

import {connect} from 'react-redux';

class TodoItem extends React.Component {

    render() {
        return (
            <li>

                {this.props.todoItem}
            </li>);
    }
}
// export default connect(null, (TodoItem));
export default TodoItem;