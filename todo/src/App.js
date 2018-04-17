import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default App;