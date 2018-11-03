import React from 'react'; 
import {deleteTask} from './actions2.js'; 
import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux'; 

class Task extends React.Component{
    render(){
        return (
            <div>
                {this.props.task}
                <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
            </div> 
             
        )
    }
}

function mapDispatchToProps(dispatch){
      return bindActionCreators({deleteTask}, dispatch); 
}

export default connect(() => {}, mapDispatchToProps)(Task)