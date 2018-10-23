import React from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import {
  createTodo,
  completeToggle,
  clearCompleted,
  updateTodo
} from './actions';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      search: '',
      showSearch: false,
    }
  }

  componentWillMount() {
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTask = event => {
    event.preventDefault();
    this.props.createTodo(this.state.task);
  }

  toggleComplete = index => {
    this.props.completeToggle(index);
  }

  clearCompleted = event => {
    event.preventDefault();
    this.props.clearCompleted();
  }

  searchClicked = () => {
    let showSearch = !this.state.showSearch;
    if (!showSearch) this.clearSearch();
    this.setState({showSearch});
  }
  
  filteredList = () => {
    let todoList = this.props.todoList.filter(todo => 
      todo.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    )
    return todoList;
  }

  clearSearch = () => {
    this.setState({search: '', showSearch: false});
  }
  
  render() {
    return (
      <div className="app-container">
        <Search 
          value={this.state.search}
          onChange={this.changeHandler}
          showSearch={this.state.showSearch}
          searchClicked={this.searchClicked}
        />
        <div className="container">
          <TodoForm 
            task={this.state.task}
            addTask={this.addTask}
            onChange={this.changeHandler}
            clear={this.clearCompleted}
            />
          <TodoList
            list={this.filteredList()} 
            toggle={this.toggleComplete}
            />
          <button onClick={this.clearCompleted} className="clear-btn">Clear Completed</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todos
  }
}

export default connect(mapStateToProps, {
  createTodo,
  completeToggle,
  clearCompleted,
  updateTodo
})(App);
