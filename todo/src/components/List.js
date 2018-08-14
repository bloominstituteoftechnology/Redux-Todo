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

    submitHandler = event => {
        event.preventDefault();
        // console.log('submitHandler sucess', addItem)
        this.props.addItem(this.state.inputValue);
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
                    >{this.value}</input>
                    <button>Sumbit</button>

                </form>
                {/* {console.log(this.props.state.todos)} */}
                {this.props.state.todos.map(item => {
                    return (
                      <div key={item.value}>{item.value}</div>
                    )
                })}
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
