import React from 'react'
import { connect } from "react-redux";
import { newTodo} from './Actions';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
        };
    }
    inputHandler = (event) => {
        this.setState({
            textInput: event.target.value
        }

        )
    }
    addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            value: this.state.textInput,
            id:Date.now(),
            completed: false,
        }
        this.props.newTodo(newTodo);
        e.target.reset();
    }
    strike = (id, event) => {
        this.setState({
            todolists: this.state.todolists.map(obj => {
                if (id === obj.id) {
                    obj.completed = !obj.completed
                }
                console.log(obj.completed)
                return obj
            })
        })
        if (event.target.style.textDecoration === "") {
            event.target.style.textDecoration = "line-through";
        } else if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = ""
        }

    }
    render() {
        return (
            <div className='form'>
                <button > Clear Completed</button>
                <form onSubmit={this.addTodo}>
                   <input
                        onChange={this.inputHandler}
                    />

                    <button type="submit">Update your todolist</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, { newTodo: newTodo })(TodoForm);