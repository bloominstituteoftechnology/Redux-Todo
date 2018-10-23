import styled from 'styled-components';

export const Task = styled.div`
    width: 100%;
    font-size: 1.6rem;
    font-family: sans-serif;
    padding: 5px;
    background: #f44336;
    color: #ffffff;
`;

export const CompletedTask = styled.div`
    width: 100%;
    font-size: 1.6rem;
    font-family: sans-serif;
    padding: 5px;
    background: #4CAF50;
    color: #ffffff;

    @:hover {
        background: #3e8e41;
    }
`;