import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { connect } from 'react-redux';
import { addTask, removeTask, toggleTask } from './actions';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';

const Div = styled.div`
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`;

class App extends Component {
    render = () => (
        <Div className="App">
            <TodoForm addTask={this.props.addTask} />
            <TodoList
                tasks={this.props.tasks}
                toggleTask={this.props.toggleTask}
                removeTask={this.props.removeTask}
            />
        </Div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => ({
    addTask: id => dispatch(addTask(id)),
    removeTask: task => dispatch(removeTask(task)),
    toggleTask: task => dispatch(toggleTask(task))
});

const withState = connect(
    mapStateToProps,
    mapDispatchToProps
);

const Enhanced = withState(App);

export default Enhanced;
