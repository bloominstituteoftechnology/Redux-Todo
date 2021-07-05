import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add} from './actions';



class AddToDo extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }


    render(){return (
      <div>
        <form onSubmit={(event)=>  {
          event.preventDefault(); 
          this.props.add(this.state.input);
          this.setState({input: ""})}}>
          <input onChange={event => {
            this.setState({input:event.target.value});
            }} value={this.state.input}placeholder="wat u got 2 do?" />
          <button type="submit">
            Add!
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        list: state
    };
    };

    export default connect(mapStateToProps, { add })(AddToDo);