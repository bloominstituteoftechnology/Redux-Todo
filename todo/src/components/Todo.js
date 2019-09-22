import React, { Component } from 'react';

// Todo returns User view and rerenders when state changes.

class Todo extends Component {
    render {
        return (
            <div>
                <label> Add List: </label>
                <input placeholder = 'milk' 
                value = this.target.value 
                onClick={this.props.handleInputValue}/>
            </div>

            )
    }
}

const mapsToProps(state) {
    return(

        // state gets activated. should get type of action 
        //and pass it to action component.
        )
}

export default connect{(mapsToProps,{action items})}(Todo);