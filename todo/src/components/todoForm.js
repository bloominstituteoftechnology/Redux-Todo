import React from 'react';
import { connect } from 'react-redux';
import { addTaskAction, deleteCompleted  } from '../action/actions';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    handleInputChange = e => {
        e.preventDefault();
        this.setState({ inputValue: e.target.value });
      };

    submitTask = (e) =>{
        e.preventDefault();
        if(this.state.inputValue){
            this.props.addTaskAction(this.state.inputValue);
        }
        this.setState({inputValue: ''})
    }
    
    clearCompleted = e =>{
        e.preventDefault();
        this.props.deleteCompleted();
    }

      render(){
          return(
              <form>
                  <input type='text' 
                  onChange={this.handleInputChange}
                   placeholder="What's Next"
                   value={this.state.inputValue} />
                   <button type='submit' onClick={this.submitTask}>Get it done!</button>
                   <button type='submit' onClick={this.clearCompleted} >I'm done with those</button> 
              </form>
          )
      }
}
const mapStateToProps=state=>{
    return state
}
export default connect(mapStateToProps, {addTaskAction, deleteCompleted} )(TodoForm)