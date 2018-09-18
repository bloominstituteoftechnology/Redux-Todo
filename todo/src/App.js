import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addTodo } from './actions';


 class App extends Component {
   constructor(props){
     super(props);
   this.state = {
     textHolder: ''
   }
  }

  handleInputChange = (event) => {
   this.setState( { [event.target.name]: event.target.value });
  }

  addTodo = () => {
    let todoText = this.state.textHolder;
    let newTodo = {
      id: this.props.todos.length,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState( { textHolder: ''} );
  }

   render () {
     return (
       <div className="App">
         <TodoList todos={this.props.todos} />
          <TodoForm handleInputChange={this.handleInputChange} textHolder={this.state.textHolder} addTodo={this.addTodo} />
       </div>
     );
  }
}
  

 const mapState = state => {
   return {
     todos: state.todo
   }
 }

 export default connect(mapState, { addTodo })(App);