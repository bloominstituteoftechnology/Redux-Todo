import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';
import {addToDo,deleteToDo,getToDos} from '../Actions'

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        console.log('this.props.data', this.props.data)
        return(
            <div>
                {
                    this.props.data.map((element,id)=>{return <ToDo key={id} item={element}/>})
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
export default connect(mapStateToProps, { addToDo, deleteToDo, getToDos })(ToDoList);