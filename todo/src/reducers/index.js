import { ADD_TASK, TOGGLE_COMPLETE,SELECT_ALL, UNSELECT_ALL, CLEAR_TASKS, SELECT_TASK,REMOVE_COMPLETED,COMPLETE_SELECTED, REMOVE_SELECTED, MOVE_SELECTED, COPY_SELECTED } from '../actions';

export default (tasks=[], action) => {
    //localStorage.clear()
    let updatedTasks;
   
   
    if(localStorage.getItem('tasks')){
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    switch (action.type){
        
        case ADD_TASK:
         const name = action.data.name;
         const value = action.data.value;
        if (name.length > 0 && value.length > 0){
            updatedTasks = tasks.concat();
            updatedTasks.push(action.data);
            document.getElementById('input-task_name').focus();
            return updatedTasks;
        }        
            return tasks;
        
        
        case TOGGLE_COMPLETE:
             updatedTasks = tasks.concat();
             if(action.isComplete){
                updatedTasks[action.index].completed = false;
             } else {
                updatedTasks[action.index].completed = true;
             }
             return updatedTasks;
        case CLEAR_TASKS:
             if(tasks.length > 0)
             if (window.confirm("DELETE ALL TASKS?")) {
                localStorage.clear();
                return [];
             }
             return tasks;
        case SELECT_TASK:
             tasks.map((task)=>{
                if(task.id === action.taskID)
                {
                     task.selected = !task.selected;
                }
                return task;
             });
             return tasks;
        case REMOVE_SELECTED:
             const tasks_selected = tasks.filter((task)=>{
                return task.selected;
             });
             if(tasks_selected.length > 0){
                if(window.confirm("Delete All Tasks Selected?")){
                    updatedTasks = tasks.concat();
                    return updatedTasks.filter((task)=>{
                        return !task.selected;
                    });
                }
            }
            return tasks;
        case MOVE_SELECTED:
             const selected = []; 
             tasks.map((task, i)=> {
                if(task.selected) selected.push(i);
                return task;
             });
             if(selected.length % 2 !== 0){
                const unselected = selected.pop();
                tasks[unselected].selected = false;
             } 
                while(selected.length > 0){
                    const item1 = selected.shift();
                    const item2 = selected.shift();
                    [tasks[item1], tasks[item2]] = [tasks[item2], tasks[item1]];
                    tasks[item1].selected = false;
                    tasks[item2].selected = false;
                }
            return tasks;

        case COPY_SELECTED:          
            updatedTasks = tasks.concat();
            while(action.tasks.length > 0){
                const task_clone = action.tasks.shift();
                task_clone.selected = false;
                task_clone.id = "ID:"+ Math.floor(Math.random() * 9000);
                updatedTasks.push(task_clone);
            }
            
             updatedTasks.map((task) =>{
                task.selected = false;
                //task.completed = false;
            });
            return updatedTasks;
        
        case REMOVE_COMPLETED:
        const completed = tasks.filter((task)=>{
            return task.completed;
         });
        if(completed.length > 0){
            if(window.confirm("Delete Completed Tasks?")){
            return tasks.filter((task)=>{
                    return !task.completed;
                });
            }
        }
        return tasks;
        case SELECT_ALL: 
            updatedTasks = tasks.concat();
            updatedTasks.map((task) => {
                    task.selected = true;
                });
            return updatedTasks;
        case UNSELECT_ALL:
            updatedTasks = tasks.concat();
            updatedTasks.map((task) => {
                task.selected = false;
            });
            return updatedTasks;
        case COMPLETE_SELECTED:
            updatedTasks = tasks.concat();
            updatedTasks.map((task) => {
                if(task.selected)
                {
                    task.completed = !task.completed;
                    task.selected = false;
                }
            });
            return updatedTasks;
    default:
        return tasks;    
    }
};