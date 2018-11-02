import React from "react"
import { connect } from "react-redux"


const Todo = props => {
 console.log(props)
    return <ul>{props.todo}</ul>
}


const mapStateToProps = state => {
    return {todo: state.todo}
}


export default connect(mapStateToProps)(Todo);