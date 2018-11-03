import React from 'react';
import { connect } from 'react-redux';
import { addCommentAction } from '../Actions/actions';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
    };

    inputHandler = (e) => {
        this.setState({comment: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addCommentAction(this.state.comment);
    }
    

    render() {
        return (
            <div>
                <form>
                    <input placeholder="comment" value={this.state.comment} onChange={this.inputHandler} />
                    <button type = "submit">Add Comment</button>
                </form>
            </div>
        )
    }
};


const mapStateToProps = () => {
    return {};
}

export default connect(() => ({}), { addCommentAction: addCommentAction })(Form);