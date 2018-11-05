import styled from 'styled-components';

// steelblue= '#2b303a'

const HeaderDivTodo = styled.div `
background:#2b303a;
border:3px solid #0250d1;
margin-bottom:30px;
display: flex;
justify-content:center;
align-items: center;
h1{
font-family: 'Acme', sans-serif;
color: #0250d1;
font-size: 4rem;
${'' /* margin-top:0; */}
height:30px
}
`
export default HeaderDivTodo;