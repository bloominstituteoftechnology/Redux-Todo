import styled from "styled-components"

export const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 3px solid #548d;
  padding: 10px;
  margin: 30px auto;

  ul {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    input {
      width: 70%;
      margin: 10px auto;
      padding: 10px;
      border: 2px solid #548d;
      font-size: 18px;
      outline: none;
    }
    button {
      width: 40%;
      padding: 10px;
      margin: 10px auto;
      border-radius: 10px;
      background-color: #548d;
      color: white;
      outline: none;
    }
  }
`

export const TodoWrapper = styled.li`
  ${props =>
    props.completed
      ? `text-decoration: line-through; color:#ccc;`
      : `text-decoration: none`}

  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    color: #548d;
    margin-right: 50%;
  }
`
