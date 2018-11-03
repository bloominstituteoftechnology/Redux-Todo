import React from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
import addTask from './actions.js'; 

class Taskbar extends React.Component{
    render(){
        return(
            <div>
                <input type="text" />
                <button onClick={ () => this.props.addTask(this.refs.task.value)}> Add Task</button>
            </div>
        )
    }
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch) 
}
export default connect( () => {}, mapDispatchToProps)(Taskbar); 