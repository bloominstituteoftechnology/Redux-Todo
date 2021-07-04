import styled from 'styled-components';

// HEADER

export const AppBox = styled.div`
    background-color: #FFFAE3;
    width: 50%;
    margin: 0 auto;
`;

export const Header = styled.h1`
    margin-top: 20px;

`;

export const SubHeading = styled.h3`
    font-weight: normal;
    font-size: 18px;
    
`;

//TO DO FORM

export const FormStyle = styled.form`
    margin: 20px auto;
    display: flex;
    align-self: center;
`;


// TO DO ITEM

export const ItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    width: 50%;
    margin: 20px auto;
    background-color: #99E1D9;
`;

export const ItemBlock = styled.li`
    display: flex;
    align-self: center;
    &:hover{
        cursor: pointer;
    }
`;

export const DeleteButton = styled.button`
    width: 30%;
    height: 4vh;
    align-self: center;
    margin-bottom: 10px;
    background-color: #F7567C;
    color: #FFFAE3;

    &:hover{
        background-color: #5D576B;
        cursor: pointer;
    }
`;