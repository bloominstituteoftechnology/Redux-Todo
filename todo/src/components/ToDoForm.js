import React from 'react'; 
import { connect } from 'react-redux';
import {addItem} from '../actions/actions';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        }
    }

    inputHandler = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} >
                <input type='text' placeholder='Your item to do' value={this.state.item} onChange={this.inputHandler}></input>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect( () => ({}), {addItem} )(Form);
