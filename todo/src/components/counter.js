import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';


 class Counter extends Component {
     render() {
         return (
            <p>
                Input Field:
                <input type='text'>

                </input>
                <button onClick={() => this.props.addItem()}>
                    Submit
                </button>
                { console.log(this.props.todos) }
                { this.props.todos.map((list) => {
                    return this.props.todos[list];
                }) }
            </p>
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         todos: state
     };
 };

 export default connect(mapStateToProps, { addItem })(Counter);

