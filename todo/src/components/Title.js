import React from "react";
import { connect } from "react-redux";
import { updateTitle } from "../actions";

class Title extends React.Component {
    state= {
        newTitle: this.props.title,
        editing: false
    };
    handleChanges = e => {
        this.setState ({ [e.target.name]: e.target.value })
    };
    updateTitle = e => {
        e.preventDefault();
        this.props.updateTitle(this.state.newTitle);
        this.setState({ editing: false });
    };

    render(){
        return (
            <div>
                {!this.state.editing ? (
                    <h1>
                        {this.props.title}{''}
                        <i 
                            className= "far fa-edit"
                            onClick={() => this.setState({ editing: true})}
                        />
                    </h1>
                ): (
                    <div>
                        <input 
                            className= "put-title"
                            type= "text"
                            name="newTitle"
                            value={this.state.newTitle}
                            onChange={this.handleChanges}
                        />
                        <button onClick={this.updateTitle}>Change this</button>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        title: state.title
    };
};
export default connect(
    mapStateToProps,
    { updateTitle }
)(Title);