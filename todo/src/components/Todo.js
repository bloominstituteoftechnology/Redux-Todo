import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        console.log('Todo.js', this.props.todos);
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            this.props.todos.map((item, index) => <div style={styles} key={item.id} id={item.id} onClick={this.handleClick}>{item.name}</div>)
        )
    }
}

const mapStateToProps = (state) => {
    console.log('State', state);
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(Todo); 
