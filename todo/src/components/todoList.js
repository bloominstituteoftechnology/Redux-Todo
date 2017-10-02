import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_task, toggle_complete,select_all, unselect_all, clear_tasks, select_task,remove_completed, remove_selected,complete_selected, move_selected, copy_selected } from '../actions';
import Task from './task';
import {Header} from './header';

class ToDoList extends Component { 
   
    render(){
        //Save Tasks To Local Storage
        localStorage.setItem("tasks", JSON.stringify(this.props.tasks));
        //Assign Tasks From Storage
        const tasks = JSON.parse(localStorage.getItem('tasks'));

        //Display No Tasks Message If No Tasks Exist
        let isEmpty;
        this.props.tasks.length <= 0 ? isEmpty = <div id="no_tasks">THERE ARE CURRENTLY NO TASKS</div> : null;

        return(
            <div id="main">

                {/*Display Header*/}
                <Header main={this.props} tasks={tasks} />
                <img id="background-logo" src="../assets/MyTasks.png" />

                <div id="todo_list">
                    
                    
                    <form id="task_form" autoComplete="off"  onSubmit={(e) =>{this.props.add_task(e, document.getElementById('input-task_name').value,document.getElementById('input-task_info').value, tasks.length);}}>
                    <input id="input-task_name" type="text" placeholder="Task Name"/>
                    <input id="input-task_info" type="text" placeholder="Task Info"/>
                    <input type="submit" hidden />
                    <span onClick={() => {this.props.clear_tasks()}}>Reset</span>
                    </form>
                    <br/>
                    <br/>
                    {isEmpty}
                    <Task main={this.props} tasks={tasks}/>
                    
                    
                    
                </div>
                <div id="footer"> © Copyright 2017 Track Seven Entertainment & Designs</div>
                
            </div>
        );
    }
};

//bindActionCreators({add_task}, this.props);
const mapStateToProps = (state) => {
    return{
        tasks: state
    };
};

export default connect(mapStateToProps, { add_task, toggle_complete,select_all, unselect_all, clear_tasks,complete_selected, select_task,remove_completed, remove_selected, move_selected, copy_selected })(ToDoList);