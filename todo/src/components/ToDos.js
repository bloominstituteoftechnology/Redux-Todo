import React from 'react';
import styled from 'styled-components';
import {addtodo, changecompleted} from '../actions/index.js';
import {connect} from 'react-redux';


const Toggle=styled.div`
${props => (props.type === 'true' ? `text-decoration:line-through` : null)}
${props => (props.type === 'false' ? `text-decoration:none` : null)}
`


const ToDos=(props)=>{
    return(
        props.todos.map(
            (todo)=>{
                return(
                    <Toggle key={todo.value} type={(todo.completed).toString()} onClick={()=>props.changecompleted(todo)}>
                        {todo.value}
                    </Toggle>
                )
            }
    )
    )
}
const mapStateToProps=(state)=>{
    return{
      todos:state.todos
    }
  }

export default connect(mapStateToProps, {addtodo, changecompleted})(ToDos);

export {ToDos};