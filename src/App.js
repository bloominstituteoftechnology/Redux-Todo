import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem, toggleState, deleteItem, clearCompleted } from './actions';


class App extends Component {
	constructor(props){
	super(props);
	this.state ={
		content: ""
	
	};	

}

changeHandler = (event) =>{
	this.setState({content: event.target.value});	
}

addItemHandler =(contentItem) => {
	this.props.addItem(contentItem);
	this.setState({content: ""});
};

deleteHandler =(indexItem) => {
	this.props.deleteItem(indexItem);
}


  render() {
    return (
      <div className="App">
	 <h1>Todo List</h1>   
	{this.props.data.todos.map((item, index) =>{return <div key={index}><li className={item.completed ? "strike" : "regular"} onClick={() => this.props.toggleState(index)}>{item.content}

	<button className="delete-btn" onClick={() => this.deleteHandler(index)}>delete</button></li></div>} )}
	    
     	
<input className="input-container" onChange={this.changeHandler} type="text" placeholder="Input item" value={this.state.content} />
	<button className="add-btn" onClick={() => this.addItemHandler(this.state.content)}>Add Item</button>

	<button className="add-btn" onClick={() => this.props.clearCompleted()}>Clear Completed</button>    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state
    };
};


export default connect(mapStateToProps, {addItem, toggleState, deleteItem, clearCompleted})(App);
