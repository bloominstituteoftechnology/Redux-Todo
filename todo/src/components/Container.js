import React from "react";
import { connect } from "react-redux";

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        }
    }

    render() {
        return (
            <div>
                hello from container component.
            </div>
        )
    }
}

export default Container