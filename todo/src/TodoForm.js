import React from 'react';
import {connect} from "react-redux";
import {add, clear} from "./actions";

class TodoForm extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         input: "",
      }
   }


   inputHandler = (e) => {
      this.setState({
         input: e.target.value,
      })
   }

   addHandler = () => {
      this.props.add(this.state.input)
      this.setState({
         input: "",
      })
   }

   clearCompleted = () => {
    this.props.clear()
 }
   render(){
      return(
         <div>
            <form onSubmit={(e) => e.preventDefault()}>
               <input 
                  value={this.state.input} 
                  placeholder="Enter Todo"
                  maxLength="50"
                  onChange={this.inputHandler}
                  onKeyDown={(event) => {
                     if (event.keyCode === 13) {
                        this.addHandler()
                     }
                  }} 
               />
               <button onClick={() => this.addHandler()}>Add Todo</button>
               <button onClick={() => this.clearCompleted()}>Clear Completed</button>
            </form>
         </div>
      )
   }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {todos: state.todos}
 }
 
 export default connect(mapStateToProps, {add, clear} )(TodoForm)