import React, { Component } from 'react';
import { addItem, toggleItem } from './actions';
import { connect } from 'react-redux'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: ''
    }
  }

  inputHandler = (event) =>{
    event.preventDefault();
    this.setState({item: event.target.value})
  }
  submitHandler = (event) =>{
    event.preventDefault();
    this.props.addItem (this.state.item);
    this.setState({item:''})
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>REDUX TODO LIST</h1>
          <h2>enter a todo</h2>
          <form onSubmit = {this.submitHandler}>
            <input type = 'text' value = {this.state.item} onChange = {this.inputHandler}/>
            <button type = 'submit'>add todo</button>
          </form>
          {this.props.todos.map( (item, index) =>
              <div key = {index} >
                <h3>{item.value}</h3>
              </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps, { addItem, toggleItem })(App);
