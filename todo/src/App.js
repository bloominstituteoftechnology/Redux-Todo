import React from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import { connect } from 'react-redux';
import { addItem, getItems } from './actions/actionTodo';

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
    const {text}= this.state;
    const newItem ={
      text,
      completed:false,
      id: this.props.todos ? this.props.todos.length + text: 0 + text
    };
    this.props.addItem(newItem);
    this.setState({
      item:''
    });
  };

  render() {
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
       
      </div>
    );
  }
}
const mapStateToProps= state => {
  return {
    todos:state.todos
  };
};


export default connect(mapStateToProps,{
  addItem,
  getItems
}) (App);
