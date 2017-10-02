import React from 'react';
export const Header = (props) => {
    return(
        <div id="header">
            <img id="logo" src="../assets/MyTasks.png" />
            <div id="options">
                <button onClick={()=>{props.main.move_selected()}}>Move Selected</button>
                <button onClick={()=>{props.main.remove_selected()}}> Remove Selected </button>
                <button onClick={()=>{props.main.copy_selected(props.tasks)}}>Copy Selected</button>
                <button onClick={()=>{props.main.complete_selected()}}>Toggle Complete</button>
                <button onClick={()=>{props.main.select_all()}}>Select All</button>
                <button onClick={()=>{props.main.unselect_all()}}>Unselect All</button>
                <span> | </span>
                <button onClick={()=>{props.main.remove_completed()}}>Remove Completed</button>

                <br/>
                <span>{`SELECTED:${props.tasks.filter((task)=>{return task.selected}).length}`}</span>
                
                <span>{`COMPLETED:${props.tasks.filter((task)=>{return task.completed}).length}/${props.tasks.length}`}</span>
                
            </div>
        </div>
    );
}