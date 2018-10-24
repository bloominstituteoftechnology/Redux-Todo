import React from 'react';
import { connect } from 'react-redux';
import { addtolist } from '../actions';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        }
    }

    addTodo = event => {
        event.preventDefault();
        this.props.addtolist(this.state.newItem)
        this.setState({
            newItem: ''
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input name='newItem' onChange={this.changeHandler} type='text' placeholder='What to do?' value={this.state.newItem} />
                <button onClick={this.addTodo}>ADD</button>
            </form>
        );
    }
}

export default connect(null, { addtolist })(TodoItem);