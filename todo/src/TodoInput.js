import React from "react";
import {connect} from "react-redux";
import {addTodo,clearTodo} from "./actions"



class TodoInput extends React.Component{

    constructor(){
        super();
        this.state={
            inputValue:""
        }


    }
    changeInputValue=e=>{

        this.setState({inputValue:e.target.value})
    }

    createNewTodo=e=>{
        e.preventDefault();
        //for deleting todos I need their id that I can pass while creating them
        this.props.addTodo(this.state.inputValue,Date.now())
        this.setState({inputValue:""})
    }
    clearClicked=(event) => {

        event.preventDefault();
        console.log("clearClicked");
        this.props.clearTodo();
    }

    render(){
        return (
            <div>
            <form onSubmit={this.createNewTodo}>

                <input  type="text" placeholder="Write your todo"
                   value={this.state.inputValue}     onChange={this.changeInputValue}/>
                <button type="submit" className="add">AddTodo</button>

            </form>

            <button onClick={this.clearClicked} className="clear">Delete Todo</button>
            </div>//Delete button should be outside the form as the form could take one submit for add
        )

    }

}

function mapStateToProps(state){
    return {}

}

export default connect(mapStateToProps,{addTodo:addTodo, clearTodo:clearTodo})(TodoInput)