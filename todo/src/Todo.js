import React, { Component } from 'react';

export default class Todo extends Component {

    remove = (e) => {
        console.log('invoked remove');
        this.props.remove(e.target.dataset.id);
    }

    markComplete = (e) => {
        console.log('invoked toggleCOmplete');
        this.props.markComplete(e.target.dataset.id);
    }

	render() {
        return (
        	<div className={ this.props.completed ? 'todo todo-complete' : 'todo' }>
            	<div>
            		<button
                        onClick={this.remove}
                        data-id={this.props.id} 
                        className="remove"></button>
            		<p>{this.props.text}</p>
            		<button
                        onClick={this.markComplete}
                        data-id={this.props.id}
                        className="markComplete"></button>
            	</div>
        	</div>
        );
	}
}
