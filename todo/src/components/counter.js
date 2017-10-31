import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';


 class Counter extends Component {
     constructor() {
         super();
         this.state = {
             todos: []
         }
     }
     render() {

         return (
            <div>
                <div>
                    <label htmlFor='chore'>Input Field: </label>
                    <input type='text' id='chore' name='name'
                        placeholder="enter task here"/>
                </div>
                <div>
                    <button onClick={() => this.props.addItem()}>
                        Submit
                    </button>
                </div>
                { console.log(this.chore) }
                { this.props.todos.value }
                <ul>
                    { this.props.todos.map((list) => {
                        return list.value;
                    })}
                </ul>
            </div>
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         todos: state
     };
 };

 export default connect(mapStateToProps, { addItem })(Counter);

