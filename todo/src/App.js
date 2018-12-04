import React, {Component} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: '#212521',
          height: '100vh',
          paddingTop: '20px',
        }}>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
