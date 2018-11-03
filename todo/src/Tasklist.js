import React from 'react'; 
import {connect} from 'react-redux'; 
import Task from './task.js'; 

class Tasklist extends React.Component{
    render(){
        return(
            <div>
              {this.props.tasks.map((task, index) => <Task key={index} task={task} />)}
            </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}

export default(mapStateToProps)(Tasklist);