import React, { Component } from 'react';
import {add} from "./Actions";
import { connect } from 'react-redux';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
          inputText: ""
        };
      }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value 
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.add(this.state.inputText);
        this.setState({
            inputText: ""
        });
    };

    

    render(){
        return(
            <form action="#" onSubmit={this.submitHandler}>
                <input name="inputText" type="text" placeholder="Todo" 
                    onChange={this.changeHandler} value={this.state.inputText} 
                    required
                />
                <button type="submit">Add ToDo</button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.items
    };
  };


export default connect(mapStateToProps,{add})(ToDo)