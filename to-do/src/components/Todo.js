import React from "react";
import { connect } from "react-redux"; // HOC!!!!
import { changeTitle, addFriend, toggleBesties } from "../actions";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      friendText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleClick = ev => {
    ev.preventDefault();
    console.log("Button clicked");
    this.props.changeTitle(this.state.inputText);
  };

  handleNewFriend = ev => {
    ev.preventDefault();
    this.props.addFriend(this.state.friendText);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New title"
          value={this.state.inputText}
        />
        <button onClick={this.handleClick}>Update Title</button>
        {this.props.friends.map((friend, index) => (
          <div key={index}>
            <h3 onClick={() => this.props.toggleBesties(index)}>
              {friend.name}
            </h3>
          </div>
        ))}
        <input
          type="text"
          name="friendText"
          onChange={this.handleChanges}
          placeholder="New friend"
          value={this.state.friendText}
        />
        <button onClick={this.handleNewFriend}>Add Friend</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    title: state.title.text
  };
};

export default connect(
  mapStateToProps,
  { changeTitle, addFriend, toggleBesties }
)(Title);
