import React from "react"

//connect to local storage
import {connect} from "react-redux";
import {add, clear} from "./action";

class TodoForm extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         input: "",
      }
   }

//handles text input
   inputHandler = (e) => {
      this.setState({
         input: e.target.value,
      })
   }

//add todo item to list
   addHandler = () => {
      this.props.add(this.state.input)
      this.setState({
         input: "",
      })
   }

//clear completed todo list items
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

//map to state is null because it's not needed, add and clear are imported for the buttons
export default connect(null, {add, clear})(TodoForm)