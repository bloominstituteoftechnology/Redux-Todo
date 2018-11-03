import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            todo: ""
        }
    }

    render() {
        return(
            <form>
                <h1>Todo List</h1>
                <input/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default Form;