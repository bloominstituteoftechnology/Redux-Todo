import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from "../actions";


const TodoList = (props) => {
    console.log("TodoList props: ", props.tasks)
    return(
        <div>
            {props.tasks.map( (item) => {
                return(
                    <div key={item.id} onClick={()=> props.completeTodo(item.id)}
                        style={item.completed? {textDecoration:'line-through'} : null}>
                        {item.task}
                    </div>
                )
            } )}
        </div>
    )
}


const mapStoreStateToComponentProps = (state) => {
    return {
        tasks: state
    }
}

export default connect(mapStoreStateToComponentProps, { completeTodo } )(TodoList)

//connect is a function imported from react-redux. it has 4 functions
//mapStateToProps mapActionsToDispatch and 2 not so important ones
//it requires at least 3 arguments, first is the mapStateToProps function,
//second is actions, then the component receiving the props.