import React from 'react'

import {connect} from 'react-redux';
import {addTask} from '../store/actions/addTask';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }

  handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value })
  }  

  handleSubmit = e => {
     e.preventDefault()
     this.setState({
        value: ''
     })
  }

addTask = () => {
    this.props.addTask(this.state.value)
}

render() {
    return(
        <div>
          <>{this.props.reducerValue}</>
         <form onSubmit={this.handleSubmit}>
             <h3>Create Task 📝</h3>
           <input name='value'
           type='text'
           value={this.state.value}
           onChange={this.handleChanges}
           />    
         </form>   
         <button onClick={this.addTask}>Submit</button>
        </div>
    )
}
}

const mapStateProps = state => {
    console.log(state)
    return {
      reducerValue: state.reducerValue
    }
  }

const mapActionProps ={
    addTask
};
    export default connect(mapStateProps, mapActionProps)(Form); 