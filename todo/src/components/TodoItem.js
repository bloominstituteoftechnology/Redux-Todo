import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    margin: 10px 0;
    padding: 25px;
`;

class TodoItem extends Component {

    toggleComplete(event) {
        this.props.toggleComplete(this.props.index);
    }

    render() {
        return (
            <TodoWrapper>
            <div>
                <input type="checkbox"
                onChange={this.toggleComplete.bind(this)}
                />
                {this.props.todo.value}
            </div>
            </TodoWrapper>
        );
    }
}

export default connect(null, { toggleComplete })(TodoItem);