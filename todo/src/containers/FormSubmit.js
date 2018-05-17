import React from 'react'; 
import { connect } from 'react-redux';
import { addTask} from '../actions/index';


 const FormSubmit = (props) =>{
    return(
        <form onSubmit = {props.submitHandle}>
            <input name = "task" onChange = {props.changeHandle} value = {props.task} />
            <button key = {props.id} className = "submit-button" onClick = {props.submitHandle}>Submit Task</button>
        </form>
    )
}

export default connect(null, {addTask})(FormSubmit);

