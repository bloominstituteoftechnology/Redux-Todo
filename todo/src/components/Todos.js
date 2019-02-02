import React from "react";
import { connect } from "react-redux";

function Todos(props) {
    console.log(props)
    return(
        <div>
           {}
        </div>
    )
}

const mapStateToProps = state => {
    return { todos: state.todos }
}

export default connect(
    mapStateToProps 
)(Todos)