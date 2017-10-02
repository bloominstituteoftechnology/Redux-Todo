import React, { Component } from 'react';
import { addtodo, switchComplete, removeItem, removeComplete } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
            }
        }

    listItOut() {
        return this.props.todos.map((name, i) => { 
            return (
                <div key={i} className={name.completed ? "completedItem" : "incompleteItem"}>
                    <i className="fa fa-check-circle" aria-hidden="true" onClick={() => this.swap(i)} key={i}></i> 
                    {i + 1}. { name.text } <button onClick={() => this.getOut(i)} className='btn space'>DELETE</button>
                </div>
            );
        });
    }

    addItem(event) {
        event.preventDefault();
        this.props.addtodo(this.state.itemText);
        this.setState({itemText: ''})
    }

    handleNewToDo(event) {
        event.preventDefault()
        this.setState({itemText: event.target.value })
    };

    isDone() {
        let truth = 0;
        for (let i = 0; i < this.props.todos.length; i++) {
            if (this.props.todos[i].completed) {
                truth += 1;
            }
        };
        if (truth === this.props.todos.length && truth !== 0) {
            return true;
        };
        return false;
    }

    getOut(i) {
        console.log(i);  
        this.props.removeItem(i)
    }

    swap(i) {
        this.props.switchComplete(i);
    }

    render() {
        return (
            <div>
                <div>
                    <div className={(this.props.todos.length === 7 && this.props.todos[6].text === 'struggle') ? "list2" : "list"}>
                        <div  className={(this.isDone()) ? "done" : "hidden"}>
                            <p><i className="fa fa-check-circle" aria-hidden="true"></i> all done!</p>
                        </div>
                        {this.listItOut()}
                     <form onSubmit={this.addItem.bind(this)}>
                        <input type='text' onChange={this.handleNewToDo.bind(this)} placeholder="Add a To-do!" value={this.state.itemText}  className="textBox"/>
                    </form>
                    </div>
                    <div>
                        <button  className={(this.props.todos.length > 0) ? "btn btn-success remove" : "hidden"} onClick={() => this.props.removeComplete()}>Click to remove completed items.</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

// export default App;
export default connect(mapStateToProps, { addtodo, switchComplete, removeItem, removeComplete })(App);