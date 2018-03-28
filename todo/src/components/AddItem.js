import React, { Component } from "react";


class AddItem extends  Component {

    render() {
        return(
            <div>
                <input type="text" ref="task" placeholder="What else you gotsta do?" />
                <button>Add To List</button>
            </div>
        )
    };
}

export default AddItem;