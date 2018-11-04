import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux from 'react';
import reducers from './components/reducers/reducers';
import Headline from './components/test'
import { updateName } from './actions'


class App extends Component {
  // bringing it back to basics, doing a walkthrough from lecture/Julie's notes.
  constructor() {
    super();
    this.state = {
      name: 'Tommy',
      setName: '',
      }
    }

    inputHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    formSubmitHandler = (e) => {
      e.preventDefault();
      this.props.updateName(this.state.name);
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Redux Todo.
          </p>
          <div>
            <h2>Hello, {this.state.name}!</h2>
            <form onSubmit={() =>{return} } >
            <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} />
            <button type="submit">Submit!</button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;