import React, {Component } from "react";
import { connect } from 'react-redux';
import{ADD_TODO, REMOVE_TODO} from '../actions';

class Todo extends Component {
    

    const mapStateToProps= (state) => {
        return {
            todos:state.todos
        }
    };
 
}



export default connect(mapStateToProps, {ADD_TODO, REMOVE_TODO}, (Todo));