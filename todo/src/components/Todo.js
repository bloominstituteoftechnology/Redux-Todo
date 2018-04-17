import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import DisplayTodos from "./DisplayTodos";



class Todo extends Component {
    constructor(props) {
        super(props)
    }
    
    
    handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value });
            console.log(e.target.value)
          };
        

    render() {
        console.log(this.props)
        return(
            <div>
                <input type="text" placeholder="Add todo" name="todo" onChange={this.handleInputChange} />
                <button onClick={() => this.props.add()} >Submit</button>
                <DisplayTodos/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { add })(Todo);

















// handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
