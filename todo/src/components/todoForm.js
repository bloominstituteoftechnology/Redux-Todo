import React from 'react';
import { connect } from 'react-redux';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      };

      render(){
          return(
              <form>
                  
              </form>
          )
      }
}