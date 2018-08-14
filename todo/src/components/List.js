import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions';
// import store from './';

class List extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    submitHandler = item => {
        item.preventDefault();
        // console.log('submitHandler sucess', item)
        console.log(Store.getState())
        this.props.addItem();
        this.setState({inputValue: ""})
    }

    inputHandler = event => {
        this.setState({
            inputValue: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        value={this.state.inputValue} 
                        placeholder="new Item" 
                        onChange={this.inputHandler} 
                        // onClick={() => this.props.addItem()}
                    >{this.value}</input>
                    <button>Sumbit</button>
                
                </form>
                {console.log(this)}
                {/* {this.map(item => {
                    <div>{item.value}</div>
                })} */}
            </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

export default connect(mapStateToProps, {addItem})(List)