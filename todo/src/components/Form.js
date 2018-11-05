import React, { Component } from "react";
import Input from './styled-component/Input';
import Button from  './styled-component/Button';


class Form extends Component {
    render() {
        return (
            <div>
               <Input 
                   type='text' 
                   name= 'name'
                   placeholder="Enter your text"
                  />
                
                <Button type="submit">Add Todo</Button>                  
            </div>
        );
    }
}

export default Form;
