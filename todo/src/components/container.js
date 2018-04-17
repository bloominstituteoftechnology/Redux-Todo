import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions/actions';

let cstyle = {
	// color: 'red',
	cursor: 'pointer',


}
let bstyle = {
	cursor: 'pointer'

}
let lstyle = {
	border: '2px solid blue'
}
class List extends Component {
	constructor(props) {
		super(props);
		this.state= {
			completed: false,
			item: ''
		}
	}
	addItem = (e) => {
		e.preventDefault();
		const name = this.input.value;
		this.input.value = '';
		// this.props.add(name);
		this.props.add(name)
		
		// const compState = this.state.completed;

		// this.setState({completed: false});
		console.log('Inside addItem, this.props: ', this.props)
		// this.setState({...this.props.todos, completed:false})
		this.setState({item: ''});
		cstyle = {
			color: 'red'
			// cursor: 'pointer'
		
		}

	};
	completeI = () => {
		// e.preventDefault();
		console.log('STATE: ', this.state);
		this.setState({completed: !this.state.completed})
		if (cstyle.color === 'blue') {
			// console.log('BLUE')
			cstyle = {
				color: 'red' ,
				cursor: 'pointer'
			
			}
		} else {
			cstyle = {
				color: 'blue',
				cursor: 'pointer'			
			}
		}
		

	}

	componentDidMount() {
		// this.props.add();
		// this.props.remove();
    }
    removeItem = (item) => {
        let rname = item
        // e.preventDefault();
		this.props.remove(rname);
		this.setState({completed: !this.state.completed})

        console.log('remove item... Value is: ', rname)
	}
	handleChange = (e) => {
		this.setState({ item: e.target.value });
	}

	render() {
		return (
			<div>
				<p>
					<input type="text" placeholder="Add Todo" onChange={this.handleChange} ref={(input) => (this.input = input)} />
					<button onClick={this.addItem}>Add Todo</button>
				</p>
				{/* List: */}
				<ul>
					{this.props.todos.map((item,i) => {
						console.log('inside todos map of container',item)
                        return (
                        <li key={item+i} style={lstyle} >						
							{item}
							<h5 style={cstyle} onClick={() => this.completeI()} >Completed: {this.state.completed.toString()}</h5>
                            <button style={bstyle} onClick={() => this.removeItem(item)}>Remove Todo</button>
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
