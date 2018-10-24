import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import {deleteToDo} from '../Actions'

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
    render(){
        console.log('this.props.data - todolist', this.props.data)
        console.log('todolist = this?? ', this )
        return(
            <div>
                {
                    this.props.data.map((element,id)=>{return <ToDo key={id} handleDeleteClick={this.handleDeleteClick} item={element}/>})
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
export default connect(mapStateToProps, { deleteToDo })(ToDoList);