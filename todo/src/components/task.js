import React, {Component} from 'react';

export default class Task extends Component {
    render(){

        const timeout = 700; //<--- Timeout Seconds
        const main = this.props.main;//<--- Main Component
        let taskCss_Toggle; //<--- Declare The Task CSS Toggle
        let task_selected;
        
        return(
            <div>
                

                {this.props.tasks.map((task, i)=>{ 
                {/*^--- Map Through All The Tasks*/}

                    task.completed ? taskCss_Toggle = 'completed_task' : taskCss_Toggle = 'uncompleted_task';
                    {/* ^--- Toggle The Task Completed CSS (TRUE/FALSE)*/}
                    task.selected ? task_selected = 'selected_task' : task_selected = '';

                    return ( 
                        
                        <div key={i} className="task_box" id={task_selected}>
                        {/*^--- Main Task Container, Assign Unique Key With Index*/}


                        <div onClick={()=>{main.select_task(task.id)}} className={taskCss_Toggle} >
                            <div className="display-task_id">{i+1}</div>
                            <div className="display-task_id">{task.id}</div>
                            <div className="display-task_name">{task.name}</div>
                            <div className="display-task_info">{task.value}</div>
                            {/*^--- Display The Current Task*/}
                        </div>


                        </div>
                    )
                })}
            </div>
        );
    }
}