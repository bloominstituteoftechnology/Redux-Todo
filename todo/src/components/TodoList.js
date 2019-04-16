import React from 'react';
import { connect } from 'react-redux';
import { addThing, toggleThing } from '../actions';

import '../App.css';

class TodoList extends React.Component {
  state = {
    newThing: ''
  };

  handleChanges = e => {
    this.setState({ newThing: e.target.value });
  };

  addThing = e => {
    e.preventDefault();
    debugger;
    this.props.addThing(this.state.newThing);
  };

  toggleThing = (e, index) => {
    e.preventDefault();
    this.props.toggleThing(index);
  };

  render() {
    console.log(this.props.things);
    return (
      <div>
        <input
          type="text"
          value={this.state.newThing}
          onChange={this.handleChanges}
          placeholder="Add a Thing"
        />
        <button onClick={this.addThing}>Add Thing</button>

        <div className="TodoList">
          {this.props.things.map((thing, index) => (
            <h4 onClick={e => this.toggleThing(e, index)} key={index}>
              {thing.completed && <i className="far fa-check-circle" />}
              {thing.name}
            </h4>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  things: state.thingsreducer.things
});
export default connect(
  mapStateToProps,
  { addThing, toggleThing }
)(TodoList);
