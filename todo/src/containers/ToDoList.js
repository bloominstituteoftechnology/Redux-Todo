import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';
import FormSubmit from './FormSubmit';

class ToDoList extends Component{
    componentDidMount(){
        this.props.addTask();
    }
    

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
                return (this.props.completed ===false);
            }
            else{
                return (this.props.completed ===true);
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
                    {this.props.tasks.map(task => {
                        return <div key = {task}>{task}</div>
                    })}             
               </ul>
            </div>         
        )
    }
}

const mapStateToProps = (state) =>  ({
    tasks: state
    
})
export default connect (mapStateToProps, { addTask })(ToDoList);