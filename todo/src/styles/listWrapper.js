import styled from 'styled-components';

const ListWrapper = styled.div`
  border: 2px solid red;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 0 lightgray;
  margin: 10px auto;
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: darkred;
  color: white;
  padding-bottom: 15px;

  form {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
      width: 80%;
    }
  }

  .list-title {
    text-decoration: underline;
    font-style: italic;
  }
  .list-items-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 90vh;
    border: 1px solid white; */
  }

  .todo-item {
    border: 2px solid white;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .todo-item:hover {
    background: white;
    color: darkred;
    border: 2px solid red;
  }
  .todo-item:active {
    background: darkred;
  }
  .todo-item p {
    margin: 5px 10px;
    font-weight: bold;
  }
  .completed-todo {
    text-decoration: line-through;
  }
  .complete-and-remove {
    display: flex;

  }
  button {
    z-index: 3;
  }

  button:hover {
    cursor: pointer;
    background: red;
    color: white;
  }
  button:active {
    background: darkred;
  }
`

export default ListWrapper;