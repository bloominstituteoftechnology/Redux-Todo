import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import TODOLIST from './components/toDoList';
import ADDTODOFORM from './components/addToDoForm';
import { addToDo, removeToDo, checkToDo } from './components/actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDoText: '',
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToDo = () => {
    const { toDoText } = this.state;
    const newToDo = { id: this.props.toDos.length + 1, completed: false, text: toDoText };
    this.props.addToDo(newToDo);
    this.setState({toDoText: ''});
  }

  render() {
    console.log('App props is ' + this.state)
    return (
      <div className="APP">
        <header className="APP__HEADER">
          <img src={logo} className="APP__LOGO" alt="logo" />
          <h1 className="APP__TITLE">YOUR TODO LIST!</h1>
        </header>
        <div className="APP__BODY">
            <ADDTODOFORM 
              handleInputChange={this.handleInputChange}
              toDoText={this.state.toDoText}
              addToDo={this.addToDo}
            />
            <TODOLIST toDos={this.props.toDos}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDos: state
  };
};

export default connect(mapStateToProps, { addToDo, removeToDo, checkToDo })(App);
