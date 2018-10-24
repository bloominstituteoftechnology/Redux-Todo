import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import {deleteToDo, toggleToDo} from '../Actions'

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    handleDeleteClick = event =>{
        event.preventDefault();
        this.props.deleteToDo(event.target.id)
    }
    handleToggleClick = (event,id) => {
        event.preventDefault();
        this.props.toggleToDo(id);
    }
    render(){
        console.log('i received...',this.props.data)
        return(
            <div>
                {
                    this.props.data.map((element,id)=>{return <ToDo key={id} handleToggleClick={this.handleToggleClick} handleDeleteClick={this.handleDeleteClick} item={element}/>})
                }
            </div>
        )
    }    
}
const mapStateToProps = (state) => {
    return {
        data: state.toDoList
    };
};
export default connect(mapStateToProps, { deleteToDo, toggleToDo })(ToDoList);