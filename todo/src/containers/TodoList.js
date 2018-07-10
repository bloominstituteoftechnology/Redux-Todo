import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../actions';
import TodoItem from '../components/TodoItem';
import styled from 'styled-components';


const StyledUl = styled.ul`
    list-style-type: none;
`;

const TodoList = (props) => {
    console.log(props);
    return (
        <StyledUl>
            {props.todos.map((item => {
                return <TodoItem item={item}
                        toggleCompleted={props.toggleCompleted}
                        key={item.todo} />
            }))}
        </StyledUl>
    );
}

const mapStateToProps = state => {
    return{
        todos: state.todos,
    }
}

export default connect(mapStateToProps, { toggleCompleted })(TodoList);