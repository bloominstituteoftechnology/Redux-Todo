import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    
    render() {
        return ( 
            <form>
                <input
                    type='text'
                    placeholder='Type todo here!'
                    value={this.state.text}
                />
                <button>Submit</button>
            </form>
        );
    }
}
 
export default Form;