import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions'
import {togglecomplete} from '../actions'

class TodoForm extends Component {


     handleChanges = e => {
        e.preventDefault();
        this.props.addtodo(e.target.todo.value)
        e.target.todo.value =''
      };


    
    handleComplete = (e,todo) =>{
        e.preventDefault();
        this.props.togglecomplete(todo)

    }

  render() {
      // console.log(this.props.addtodo)
      // console.log(this.props.todo)
      // console.log(this.props.togglecomplete)
    return (
        <div>
        <div>
        {this.props.todo.map((todo, id)=>{
            return(
                <h2  onClick ={()=>this.props.togglecomplete(todo)}key = {id}>{todo.newTodo} </h2>
            )
        })}
        </div>
      <div>
        <form onSubmit ={(event)=> this.handleChanges(event)}>
        <input
        
        type = "Text"
        placeholder = "Add Todo..."
        name = "todo"
        
        
        />
        <button type ="submit" >Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(mapStateToProps)
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps,  {addtodo,togglecomplete} )(TodoForm);