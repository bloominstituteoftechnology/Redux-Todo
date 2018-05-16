import React from 'react';
import { ADD_TODO, COMPLETE_TOGGLE } from '../actions';

class todoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoValue: ''
        };
        this.addTodo = this.addTodo.bind(this);
        this.updateNewTodo = this.updateNewTodo.bind(this);
    }

    addTodo(event) {
        event.preventDefault();
        this.props.addTodo({
            value: this.state.todoValue,
            completed: false
        });
        this.setState({ todoValue: '' });
    }
    updateNewTodo(event) {
        this.setState({ todoValue: event.target.value })
    }
    render() {
        return (
            <div className="todoForm">
                <form onSubmit={this.addTodo}>
                    <input
                        onChange={this.updateNewTodo}
                        placeholder="entries go here"
                        value={this.state.todoValue} />
                </form>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        todos: store.todos
    }
}



export default connect(mapStoreToProps, { ADD_TODO })(list);