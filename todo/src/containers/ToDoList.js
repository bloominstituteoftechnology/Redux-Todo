import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';
import FormSubmit from './FormSubmit';

class ToDoList extends Component{

    

    submitHandle = (e) =>{
        this.setState ({[e.target.name]:e.target.value})//every time you call setState you call the render function
    }

    changeHandle = (e) => {
        e.preventDefault();
        const tasks = this.props.tasks.slice(); //slice creates a copy of the array so we don't mutate the original
            tasks.push(this.props.task);
            this.setState({tasks:tasks, task: ''});                        
    }

    truthyHandle = (e) => {
        this.setState(()=>{
            if(this.props.completed ===true){
                return this.props.completed ===false;
            }
            else{
                return this.props.completed ===true;
            }
        })
    }
    render(){
        return(
            <div>       
                <h1>My To-Do List</h1>     
                    <FormSubmit tasks = {this.props.tasks}
                                changeHandle = {this.changeHandle}
                                submitHandle = {this.submitHandle} />
           
               <ul>
                    I will be an unordered List
                    <li>with list items</li>
                    <li> if I can figure out the syntax for the map function that I know I can do</li>
                    <li> but can't seem to figure out the this-ness vs the prop-ness of things</li>              
               </ul>
            </div>         
        )
    }
}

const mapStateToProps = (state) =>  ({
    tasks: state
    
})
export default connect (mapStateToProps, { addTask })(ToDoList);