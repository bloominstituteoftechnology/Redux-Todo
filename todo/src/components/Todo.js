import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, toggle } from '../actions';


class Todo extends Component {
    render () {
        return (
            <div></div>
        );
    }
}

const mapStateToProps =(state) => {
    const value = state.user.value;
    return {
        value
    }
}
const mapStateToProps = (state) => {
    const completed = state.user.completed;
    return {
        completed
    }
}
export default connect(mapStateToProps, { add, toggle })(Counter);

/* teacher code 
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleComplete } from '../actions';

class Todo extends Component {
    toggleComplete() {
        this.props.toggleComplete(this.props.index);
    }

    render() {
        return (
            <li>
                <input
                    type = "checkbox"
                    onChange={this.toggleComplete.bind(this)}
                />
                {this.props.todo.value}
            </li>
        );
    }

}
export default connect(null, { toggleComplete })(Todo);
*/