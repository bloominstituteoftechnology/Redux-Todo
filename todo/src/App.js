import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addItem, getItems } from './actions/actionTodo';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      todos:[],
      item:""
    }
  }

  componentDidMount() {
    const myTodos =JSON.parse(localStorage.getItem('todos'));
    if (myTodos !==null){
      this.props.getItems(myTodos);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      localStorage.setItem('todos', JSON.stringify(nextProps.todos));
    }
  }

  handleTodoInput= event => {
    this.setState({ [event.target.name]: event.target.value})
  };

  addItem= event => {
    event.preventDefault();
    const {item}= this.state;
    const newItem ={
      item,
      completed:false,
      id: this.props.todos ? this.props.todos.length + item: 0 + item
    };
    this.props.addItem(newItem);
    this.setState({
      item:''
    });
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h3>To Do List</h3>
        </header>
        <TodoForm
          item={this.state.item}
          addItem={this.addItem}
          handleTodoInput={this.handleTodoInput}
        />
        <TodoList 
          // items={this.state.todos}
          items={todos}
          
        />
       
      </div>
    );
  }
}
const mapStateToProps= state => {
  return {
    todos: state.todos
  };
};


export default connect(mapStateToProps,{
  addItem,
  getItems
}) (App);
