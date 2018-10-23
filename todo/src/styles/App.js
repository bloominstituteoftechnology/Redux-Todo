import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #ee0979;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const HeaderContainer = styled.div`
    margin: 50px 0 0;
    width: 500px;
    height: 200px;
    background: url('https://images.pexels.com/photos/1516705/pexels-photo-1516705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center/cover;
    border-radius: 10px 10px 0 0;
    position: relative;

    &::after {
        content: 'to do list';
        font-size: 5rem;
        font-family: sans-serif;
        /* letter-spacing: -5px; */
        color: #ffffff;
        text-shadow: 3px 3px 0 #ee0979, -3px -3px 0 #ff6a00;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;

export const ListContainer = styled.div`
    width: 500px;
    background: #ffffff;
    padding: 2%;
    border-radius: 0 0 10px 10px;

    @media(max-width: 600) {
        width: 95%;
    }
`;