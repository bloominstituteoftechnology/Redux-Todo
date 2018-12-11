import React from "react";
import { changeTitle as actionChangeTitle, addFriend, toggleCompleted } from "../actions/index";
import { connect } from "react-redux";

class Title extends React.Component {
    constructor () {
        super ();
        this.state = {
            inputText: '',
            name: ''
        };
    }
    
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClick = e => {
        e.preventDefault();
        console.log('handle click');
        this.props.changeTitle(this.state.inputText)
    }

    handleAddFriend = e => {
        e.preventDefault();
        console.log('Button Clicked');
        this.props.addFriend(this.state.name);
    };

    toggleCompleted = index => {
        this.props.toggleCompleted(index);
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input 
                    type='text'
                    name='inputText'
                    onChange={this.handleChanges}
                    placeholder='Update Goal Title'
                    value={this.state.inputText}
                    autoComplete='off'
                />
                <button onClick={this.handleClick}>Update Goal Title</button>

                {this.props.friends.map((friend, index) => (
                    <h2 onClick={() => this.toggleCompleted(index)} key={friend.name} >
                    {friend.name}
                    </h2>
                ))}

                <input 
                type='text'
                name='name'
                onChange={this.handleChanges}
                placeholder='Add Goal'
                value={this.state.name}
                autoComplete='off'
                />
                <button onClick={this.handleAddFriend}>Add Goal</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        title: state.title,
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeTitle: text => dispatch(actionChangeTitle(text))
    };
}

const withState = connect(
    mapStateToProps,
    {
        changeTitle: actionChangeTitle,
        addFriend,
        toggleCompleted
    }
);

const EnhancedTitle = withState(Title);

export default EnhancedTitle;