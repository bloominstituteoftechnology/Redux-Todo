import React from 'react';
import { connect } from 'react-redux';


const ToDoItem = (props) => {
    console.log(props)
    return(
        <div>
            <h3>{props.value}</h3>
        </div>
    )
}

export default ToDoItem;

// const mapStateToProps = (state) => {
//     return {
//         value: state.value,
//         completed: state.completed
//     };
// };

// export default connect(mapStateToProps)(ToDoItem);