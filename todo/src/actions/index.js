export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_TASKS = 'CLEAR_TASKS';
export const SELECT_TASK = 'SELECT_TASK';
export const REMOVE_SELECTED = 'REMOVE_SELECTED';
export const MOVE_SELECTED = 'MOVE_SELECTED';
export const COPY_SELECTED = 'COPY_SELECTED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const SELECT_ALL = 'SELECT_ALL';
export const UNSELECT_ALL = 'UNSELECT_ALL';
export const COMPLETE_SELECTED = 'COMPLETE_SELECTED';

export const add_task = (e, taskName, taskInfo,tasksCount) => {
    e.preventDefault();
    //document.getElementById('input-task_name').value = '';
    //document.getElementById('input-task_info').value = '';
    const inputName = document.getElementById('input-task_name');
    const inputInfo = document.getElementById('input-task_info');
    if(inputName.value === '')
    {
        inputName.style.border = "2px solid red";
    }else {
        inputName.style.border = "2px solid black";
    }
    if(inputInfo.value === '')
    {
        inputInfo.style.border = "2px solid red";
    } else {
        inputInfo.style.border = "2px solid black";
    }
    if(inputInfo.value !== '' && inputName.value !== '')
    {
        inputInfo.value = '';
        inputName.value = '';
    }
    return{
        type:ADD_TASK,
        data: {
            name:taskName,
            id: "ID:"+ Math.floor(Math.random() * 9000),
            value:taskInfo, 
            completed:false,
            selected: false
        }
    }
};


export const toggle_complete = (index, isComplete) => {
    return {
        type:TOGGLE_COMPLETE,
        index: index,
        isComplete: isComplete
    }
};

export const clear_tasks = () => {
    return{
        type:CLEAR_TASKS
    }
};

export const select_task = (taskID) => {
    return{
        type:SELECT_TASK,
        taskID: taskID
    }
};

export const remove_selected = () => {
    return{
        type: REMOVE_SELECTED
    }
};

export const move_selected = () => {
    return {
        type: MOVE_SELECTED
    }
};

export const copy_selected = (tasks) => {
    
     return{
         type: COPY_SELECTED,
         tasks: tasks.filter((task) => {
             task.completed = false;
            return task.selected === true;
        })
     }
};

export const remove_completed = () => {
    return {
        type: REMOVE_COMPLETED
    }
};

export const select_all = () => {
    return {
        type: SELECT_ALL
    }
};
export const unselect_all = () => {
    return {
        type: UNSELECT_ALL
    }
};
export const complete_selected = () => {
    return {
        type: COMPLETE_SELECTED
    }
};