import React from 'react';
function TodoForm(props) {
  return (
    <form>
      <input type="text" name="newTodo" />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
