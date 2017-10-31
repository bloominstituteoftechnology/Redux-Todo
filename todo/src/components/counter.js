import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';


 class Counter extends Component {
     render() {
         console.log(this.state);
         return (
            <p>
                Input Field:
                <input type='text'>
                </input>
                <button onClick={() => this.props.addItem()}>
                    Submit
                </button>
                { this.state }
            </p>
         );
     }
 }

 const mapStateToProps = (state) => {
     return {
         count: state
     };
 };

 export default connect(mapStateToProps, { addItem })(Counter);

