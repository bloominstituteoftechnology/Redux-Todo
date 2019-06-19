import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addtodo} from '../actions/index.js';

class NewTodoForm extends Component{
    constructor(props){
        super();
        this.state={
            value:'',
            completed:false
        };
    }
    changeHandler=(e)=>{
        this.setState(
            {value:e.target.value}
        );
    }

    submitHandler=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState(
            {value:'',
        completed:false}
        )
    }


   

    render(){
        return(
        <form onSubmit={this.submitHandler}>
            <input onChange={this.changeHandler}type='text' placeholder="newToDo" value={this.state.value}></input>
        </form>
        )
    }
    

}

const mapStateToProps=(state)=>{
    return{
        todos:state.todos
      }
}


export default connect(mapStateToProps, {addtodo})(NewTodoForm);

export {NewTodoForm};