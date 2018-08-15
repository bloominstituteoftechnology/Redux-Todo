import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
        return (
            <div>
            {props.tasks.map(task => (
                <div>
                    <ul>
                        <li>
                            {task.task}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
        ) 
    }


//mapStateToProps takes the info in the redux store and passes it to state
const mapStateToProps = state => {
    return{
      tasks: state
    };
  };
  
  
export default connect(mapStateToProps)(TodoList);
//connect wires our component with the redux store
//it does this through the provider
  