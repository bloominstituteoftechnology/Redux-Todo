import React from 'react'
import { connect } from "react-redux";
import { newTodo } from './Actions';
import './index'
import { Button, InputGroupAddon, Input, InputGroup } from 'reactstrap';
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
            id: Date.now(),
            completed: false,
        }
        this.props.newTodo(newTodo);
        e.target.reset();
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.addTodo}>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                            <Button outline color="primary" type="submit">Update your todolist</Button>
                        </InputGroupAddon>
                        <Input onChange={this.inputHandler} />
                    </InputGroup>
                </form>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, { newTodo: newTodo })(TodoForm);