import React from "react";
import {connect} from "react-redux";
import {addTodo} from "./actions"



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
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue:""})
    }
    render(){
        return (
            <form onSubmit={this.createNewTodo}>
                TodoInput
                <input  type="text" placeholder="Write your todo"
                   value={this.state.inputValue}     onChange={this.changeInputValue}/>
                <button type="submit">AddTodo</button>
            </form>
        )




    }

}

function mapStateToProps(state){
    return {}

}

export default connect(mapStateToProps,{addTodo:addTodo})(TodoInput)