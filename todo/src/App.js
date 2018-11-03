import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodoAction } from './action';
import Headline from './Headline';

import logo from './logo.svg';
import './App.css';

import Todosarraydisplay from './Todosarraydisplay';

// import TodosList from './containers/TodosList';
// import TodoDetail from './containers/TodoDetail';


// import { connect } from '../node_modules/react-redux';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { value: "1st item one ", completed: false },
        { value: "2nd item two ", completed: false },
        { value: "3rd item three ", completed: false },
        { value: "4th item four ", completed: false },
      ],
      name: '', //[{value: ""}],
    };
  }

  //change name -> name.value
  inputHandler = event => {
    // this.setState({ [event.target.name.value]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  //change name -> name.value; doesn't break when click submit (but command does not go thru)
  formSubmitHandler = event => {
    event.preventDefault();
    // this.props.updateTodoAction(this.state.name.value);
    this.props.updateTodoAction(this.state.name);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Redux Todo App:
          </p>
          <div>
              <ul>
                {this.state.todos.map((todo) => {
                  return <li>{todo.value}</li>
                })}
              </ul>
          </div>

          <div>
            <Headline /> 
            {/* <ul>
                {this.state.name.map((item) => {
                  return <li> {item.value} </li>   //change name -> name.value to accomodate
                })}
            </ul> */}
          </div>
          
          <form onSubmit={this.formSubmitHandler}>
                <input 
                  placeholder="some text"
                  type="text"
                  name="name"
                  // value={this.state.name.value}   //change name -> name.value; doesn't break when type
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
                <button type="submit">submit</button>
          </form>



          <p>
            Redux Todo App Version TWO:
          </p>

          <div>
              <Todosarraydisplay />
          </div>

          <form>
                <input placeholder="some text"/>
                <button>submit</button>
          </form>

        </header>

      </div>
    );
  }
}

// const mapStateToProps = () => {
//   return {};
// }

export default connect(
  () => ({}), 
  {updateTodoAction: updateTodoAction} 
)(App);

// export default App;

// create a basic todo app WITHOUT Redux first,
// then go through steps that Dan went through in creating sandbox to ADD Redux files
// initially, ignore what you did last night, THEN merge


// 