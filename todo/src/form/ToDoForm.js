import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo:''
        }
    }
    render(){
    return(
        <div>
        <form>
        <p>Griffin TODO LIST</p>
          <input></input>
        </form>
        <button>SUBMIT</button>
        </div>
    )
}
}
export default Form;