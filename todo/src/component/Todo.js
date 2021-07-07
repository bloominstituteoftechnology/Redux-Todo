import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const TODO = props => {
    return(
<li className="list-group-item ">
        <spa>{props.todo.task}</spa>
        <div>
        <FontAwesomeIcon className="completed" icon="check-circle" /> 
        <FontAwesomeIcon className="delete" icon="trash-alt"  /> 
        </div>
        </li>
        
    )
}
  
export default TODO
