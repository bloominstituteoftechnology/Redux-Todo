import React from "react";
import { addGoal as actionAddGoal, toggleCompleted } from "../actions";
import { connect } from "react-redux";

class Goal extends React.Component {
    constructor () {
        super ();
        this.state = {
            goals: []
        };
    }
    
    handleChanges = e => {
        this.setState({ [e.target.goal]: e.target.value });
    };

    handleClick = e => {
        e.preventDefault();
        console.log('handle click');
        this.props.addGoal(this.state.goals)
    }

    handleAddGoal = e => {
        e.preventDefault();
        console.log('Button Clicked');
        this.props.addGoal(this.state.goals);
    };

    toggleCompleted = index => {
        this.props.toggleCompleted(index);
    };

    render() {
        return (
            <div>
                <h1>Your steps to World Domination</h1>
                {this.props.goals.map((goals, index) => (
                    <h2 onClick={() => this.toggleCompleted(index)} key={goals.goal} >
                    {goals.goal}
                    </h2>
                ))}

                <input 
                type='text'
                goal='goal'
                onChange={this.handleChanges}
                placeholder='Add Goal'
                value={this.state.goal}
                autoComplete='off'
                />
                <button onClick={this.handleAddGoal}>Add Goal</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        goals: state.goals
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addGoal: text => dispatch(actionAddGoal(text))
    };
}

const withState = connect(
    mapStateToProps,
    {
        addGoal: actionAddGoal,
        toggleCompleted
    }
);

const EnhancedGoal = withState(Goal);

export default EnhancedGoal;