import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'react';
import reducers from './reducers/reducers';
import Headline from './components/test';
// import { updateName } from './actions';
import {connect} from 'react-redux';
import TodoForm from './components/ToDoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import {add} from './actions/'

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      }
    }

    inputHandler = (e) => {
      this.setState({
        [e.target.input]: e.target.value,
      })
    }

    // formSubmitHandler = (e) => {
    //   e.preventDefault();
    //   this.props.updateName(this.state.setName);
    // }

    addHandler = () => {
      this.setState.add(this.state.input);
      this.setState({
        input: '',
      })

    }




  render() {
    return (
      <div className="App">
      <TodoList />
      <TodoForm />
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          value={this.state.input}
          placeholder="enter todo"
          onChange={this.inputHandler}
        />
        <button onClick={() => this.addHandler()}>Add</button>

        
      </form>



        {/* <header className="App-header">
          <p>
            Redux Todo.
          </p>
          <div>
            <h2>Hello, {this.props.name}!</h2>
            <form onSubmit={this.formSubmitHandler} >
            <input type="text" name="setName" value={this.state.setName} onChange={this.inputHandler}/>
            <button type="submit">Submit!</button>
            </form>
          </div>
        </header> */}
      </div>
    );
  }
}

export default App;

// const mapStateToProps = state => {
//   return {name: state.name}
// }

// export default connect(
//   mapStateToProps, {updateName}
// )(App);
