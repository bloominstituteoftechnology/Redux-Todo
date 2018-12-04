import React from "react";
// import { changeTitle as actionChangeTitle} from './actions'
import { connect } from "react-redux";

class Todos extends React.Component {
  constructor() {

    super();
    this.state = {
        inputText: '',

    }


  }


  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});

  }

  handleClick = event => {
    event.preventDefault();
    console.log('Button was clicked!');
    this.props.changeTitle(this.state.inputText);

  }

  render() {
    return(
        <div>
            <h1>{this.props.title}</h1>
            <input 
                type= "text"
                name= "inputText"
                onChange={this.handleChanges}
                placeholder="Testing our reducers -> change the title!"
                value={this.state.inputText}
            />

        </div>



    )



  }
}
