import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions/actions';

class List extends Component {
	addItem = (e) => {
		e.preventDefault();
		const name = this.input.value;
		this.input.value = '';
        this.props.add(name);
	};

	componentDidMount() {
		this.props.add();
		this.props.remove();
    }
    removeItem = (item) => {
        let rname = item
        // e.preventDefault();
        this.props.remove(rname);
        console.log('remove item... Value is: ', rname)
    }

	render() {
		return (
			<div>
				<p>
					<input type="text" placeholder="Add Todo" ref={(input) => (this.input = input)} />
					<button onClick={this.addItem}>Add Todo</button>
				</p>
				{/* List: */}
				<ul>
					{this.props.todos.map((item,i) => {
                        return (
                        <li key={item+i}>
                            {item}
                            <button onClick={() => this.removeItem(item)}>Remove Todo</button>
                        </li>)
                    })}
				</ul>
			</div>
		);
	}
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
	return {
		todos: state
	};
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { add, remove })(List);
