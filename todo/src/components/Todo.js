import React, { Component } from 'react';
import styled from 'styled-components';


const TodoContainer = styled.div`
    width:100%;
    display:flex;
    flex-flow:column;
`;

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <TodoContainer>AddTdod</TodoContainer>
    }

}

export default Todo;