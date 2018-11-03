import React from "react";

export const TodoForm = ({ handleChange, handleSubmit, input }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ToDo: </label>
        <input value={input} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};
