import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions/actions';

let cstyle = {
	// color: 'red',
	cursor: 'pointer',
	// hover: {backgroundColor: 'yellow'}
};
let test = {};
let bstyle = {
	cursor: 'pointer',
	// width: '10%'
};
let lstyle = {
	border: '2px solid blue',
	display: 'flex',
	justifyContent: 'center'
};
let cstate;
let cindex = [];

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
			item: '',
			cindex: []
		};
	}
	addItem = (e) => {
		e.preventDefault();
		const name = this.input.value;
		this.input.value = '';
		this.props.add(name);

		console.log('Inside addItem, this.props: ', this.props.todos.length);
		cindex[this.props.todos.length] = 'false';

		cstate = 'false';
		cstyle = {
			color: 'red',
			cursor: 'pointer'
		};
		test = {
			color: 'red',
			cursor: 'pointer'
		};
	};
	completeI = (i) => {
		if (test.color === 'blue') {
			test = {
				color: 'red',
				cursor: 'pointer'
			};
			cindex[i] = 'false';
		} else if (test.color === 'red') {
			test = {
				color: 'blue',
				cursor: 'pointer'
			};
			cindex[i] = 'true';
		} else {
			test = {
				color: 'red',
				cursor: 'pointer'
			};
			cindex[i] = 'false';
		}
		this.setState({ completed: !this.state.completed });
		console.log('cindex[i] boolean: ', this.state.cindex[i]);
		console.log('color inside cindex, color: ', cstyle.color);
	};

	componentDidMount() {
		// this.props.add();
		// this.props.remove();
	}
	removeItem = (item) => {
		let rname = item;
		// e.preventDefault();
		this.props.remove(rname);
		this.setState({ completed: !this.state.completed });

		console.log('remove item... Value is: ', rname);
	};

	render() {
		{
			let cnum = 0;
		}
		return (
			<div>
				<p>
					<input type="text" placeholder="Add Todo" ref={(input) => (this.input = input)} />
					<button onClick={this.addItem}>Add Todo</button>
				</p>
				{/* List: */}
				<ul>
					{this.props.todos.map((item, i) => {
						console.log('inside todos map of container', item);
						return (
							<div style={lstyle} key={item + i}>
							<li  >
								<h3>{item}</h3>
								</li>
								<div>
								<button style={bstyle} onClick={() => this.removeItem(item)}>Remove Todo</button>
								</div>
								{/* <div> */}

								<h3 style={cstyle} onClick={() => this.completeI(i)}>
								Completed: {cindex[i]}, click if completion changed
								</h3>
								</div>
							
						);
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
