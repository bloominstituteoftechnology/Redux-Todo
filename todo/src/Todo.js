import React from 'react';
import { connect } from "react-redux";
import {completed,deleted } from './Actions';
import { Button } from 'reactstrap';
import { ListGroupItem } from 'reactstrap';
const Todo = (props) => {
  
    return (
       <>
            <ListGroupItem className="listitem" color="info" style={{
            textDecoration: props.todo.completed ? 'line-through' : 'none'
            }} onClick={() => { props.completed(props.id) }}>{props.todo.value}</ListGroupItem>
            <Button className="button" outline color="danger"   onClick={() => { props.deleted(props.id) }}>delete</Button>
        </>
    )
}

const mapStateToProps = state => {
    return {};

};
export default connect(mapStateToProps, { completed: completed, deleted:deleted })(Todo);

