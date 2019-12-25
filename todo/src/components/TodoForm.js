import React from "react";
import { changeTitle as actionChangeTitle, addTodo, toggleCompleted} from '../actions'
import { connect } from "react-redux";
import './TodoForm.css';
class TodoForm extends React.Component {
  constructor() {

    super();
    this.state = {
        inputText: '',
        todoText: '',

    }


  }


  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});

  }

  handleClick = event => {
    event.preventDefault();
    console.log('Button was clicked!');
    this.props.changeTitle(this.state.inputText);
    this.setState({inputText: ''})

  }

  //time to add todos! so, i have a state called name up there, and i wonder how to set it up properly
  handleAddTodo = event => {
    event.preventDefault();
    // need to add some actions 
    this.props.addTodo(this.state.todoText);
    this.setState({todoText: ''})
  }
  handleToggleCompleted = id => {
  
    this.props.toggleCompleted(id)

  }

  render() {
    return(
        <div>
            <h1>{this.props.title}</h1>
            <input 
                type= "text"
                name= "inputText"
                onChange={this.handleChanges}
                placeholder="Testing our reducers -> change the title!"
                value={this.state.inputText}
                autoComplete="off"
            />
            <button onClick={this.handleClick}>Update Title</button>

            
            {this.props.todos.map((todo, id) => (
              <h3 className={todo.completed ? "completed"  : "notCompleted" } onClick={() => this.props.toggleCompleted(id)}key={todo.id}>{todo.todoText}</h3>
            ))} 
            <input 
                type= "text"
                name= "todoText"
                onChange={this.handleChanges}
                placeholder="What do we do today?"
                value={this.state.todoText}
                autoComplete="off"
            />
            <button onClick={this.handleAddTodo}>Add a Todo!</button>
        </div>

    )



  }

  
}
function mapStateToProps(state) {
  return {
    title: state.title,
    todos: state.todos,

  }
}
function mapDispatchToProps(dispatch) {
  return {
    changeTitle: text => dispatch(actionChangeTitle(text)),
    addTodo: todoText => dispatch(addTodo(todoText)),
    toggleCompleted: id => dispatch(toggleCompleted(id))
    
  }

}

// const withState = connect(mapStateToProps, mapDispatchToProps); 

// const EnhancedTodoForm = withState(TodoForm);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

// export default connect(
//   mapStateToProps,
//   { increment, decrement }
// )(Counter);