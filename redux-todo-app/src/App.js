import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addItem, deleteItem, updateItem } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      newTaskName: '',
      showForm: false,
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.taskName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <form style={{margin: '20px'}}>
          <input onChange={this.handleOnChange} name="taskName" type="text" placeholder="Name" style={{margin: '0 10px 0 0'}}/>
          <button onClick={this.handleSubmit} type="submit">Add Item</button>
        </form>
        <section>
          <h2>Tasks</h2>
          <ul>
          
            {this.props.todos.map(item => {
              return (
                <div key={item} style={{border: '1px solid black', boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.2)', width: '300px', margin: '0 auto', padding: '20px'}}>
                  <li style={{listStyleType: 'none'}}>{item}</li>
                  <button onClick={() => this.props.deleteItem(item)}>Delete {item}</button>
                  <button onClick={() => this.setState({showForm: !this.state.showForm})}>Show Update Form</button>
                  {this.state.showForm ? 
                    <form>
                      <input onChange={this.handleOnChange} name="newTaskName" type="text" placeholder={this.state.taskName} />
                      <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        this.props.updateItem(item, this.state.newTaskName);
                      }}>Update {item}</button>
                    </form>
                   : null}
                </div>
              )
            })}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addItem, deleteItem, updateItem })(App);
