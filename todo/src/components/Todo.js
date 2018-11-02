import React from "react"
import { connect } from "react-redux"


const Todo = props => {

    return <ul><li>{props.todo}</li></ul>
}


const mapStateToProps = state => {
    return {todo: state.todo}
}


export default connect(mapStateToProps)(Todo);