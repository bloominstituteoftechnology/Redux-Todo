import React from 'react';
import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './appStyles.css';
import { connect } from 'react-redux';

const stuffToDo = [];



class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   allStuffToDo: stuffToDo,
    //   inputText: '',
    // };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    // console.log(event.target.name);
  };

  addTask = event => {
    // console.log ('button pushed',this.state);
    event.preventDefault();
    this.props.addTodoTask(this.state.taskItem);

    // this.setState({
    //   allStuffToDo: [...this.state.allStuffToDo,
    //   {
    //     task: this.state.inputText,
    //     id: Date.now(),
    //     completed: false,
    //   }
    //   ],
    //   inputText: ''
    // }
    // );

  };

  changeFinished = id => {
    this.props.toggleCompleted(id)

    // this.setState({
    //   allStuffToDo: this.state.allStuffToDo.map(each => {
    //     if (each.id === id) {
    //       return {
    //         ...each,
    //         completed: each.completed === false ? true : false
    //       };
    //     } else {
    //       return each;
    //     }
    //   })
    // });
  };

  clearXedOutTask = (ev) => {
    console.log('clearXedOutTask function invoked');
    ev.preventDefault();
    this.props.deleteTasks(this.state.);


    // this.setState({
    //   allStuffToDo: this.state.allStuffToDo.filter(each => each.completed === false)
    // });
  };

  


  render() {
    return (
      <div className="App" >
        <h2> Welcome to your Todo App! </h2>
        <TodoList tasks={this.state.allStuffToDo} changeFinished={this.changeFinished} />

        <TodoForm
          clearXedOutTask={this.clearXedOutTask}
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    task: state.task

  };
}

function mapDispatchToProps(dispatch) {
  return{
    addTodoTask()
    toggleCompleted()
    deleteTasks()
    
  }
}

// function
const withState = connect(
  mapstateToProps,
  {
    addTodoTask: addTodoTask,
    toggleCompleted: toggleCompleted,
    deleteTasks: deleteTasks
    id: 0

  }
);

const EnhancedApps = withState(App);

export default EnhancedApps;