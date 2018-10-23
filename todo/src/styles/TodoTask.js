import styled from 'styled-components';

export const Task = styled.div`
    width: 98%;
    font-size: 1.6rem;
    font-family: sans-serif;
    padding: 10px 30px 10px 30px;
    border: 1px solid #f44336;
    background: #ffffff;
    color: #07070A;
    position: relative;
    margin: 5px 0;
    overflow: hidden;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);

    &::after {
        content: '✔';
        font-size: 2rem;
        position: absolute;
        color: #efefef;
        top: 9px;
        right: 5px;
    }

    &::before {
        content: '';
        width: 20px;
        height: 100%;
        background: #f44336;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const CompletedTask = styled.div`
    width: 98%;
    font-size: 1.6rem;
    font-family: sans-serif;
    padding: 10px 30px 10px 30px;
    border: 1px solid #4CAF50;
    background: #ffffff;
    color: #07070A;
    position: relative;
    margin: 5px 0;
    overflow: hidden;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.34);


    &::after {
        content: '✔';
        font-size: 2rem;
        position: absolute;
        color: #4CAF50;
        top: 9px;
        right: 5px;
    }

    &::before {
        content: '';
        width: 20px;
        height: 100%;
        background: #4CAF50;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const TaskText = styled.div`
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Close = styled.div`
    cursor: pointer;
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2rem;
`;