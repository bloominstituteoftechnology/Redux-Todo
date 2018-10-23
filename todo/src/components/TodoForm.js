import React from "react";

class TodoForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="New to-do item" />
                <button type="submit">Add Item</button>
            </form>
        );
    }
}

export default TodoForm;