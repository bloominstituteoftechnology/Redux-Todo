import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    updateInputState = e => {
        this.setState( {text: e.target.value} )
    }

    submitTodo = () => {
        const todo = {
            id: state.length + 1,
            text: this.state.text,
            completed: false,
        }
        this.props.state.push(todo);
        this.setState({text: ''});
    }
    
    render() {
        return ( 
            <form>
                <input
                    type='text'
                    placeholder='Type todo here!'
                    value={this.state.text}
                    onChange={this.updateInputState}
                />
                <button onClick={this.submitTodo}>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state,
    }
}
 
export default connect(mapStateToProps, {  })(Form);