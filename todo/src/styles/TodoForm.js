import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 80%;
    margin: 0;
    padding: 5px;
    font-size: 1.4rem;
    outline-width: thin;
    background: #ffffff;
`;

export const Submit = styled.input`
    width: 20%;
    margin: 0;
    border: 2px solid #ee0979;
    font-size: 1.4rem;
    color: #ee0979;
    font-weight: bold;
    padding: 5px;
    transition: all 0.3s ease;
    outline-width: thin;

    &:hover {
        color: #ffffff;
        background: #ee0979;
        transition: all 0.3s ease;
        outline-width: thin;
    }
`;