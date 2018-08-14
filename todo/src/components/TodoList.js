import react from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
    console.log(props.tasks);
    return (
        <div>
            {props.tasks.map(task =>(
                <div>
                    {task.task}
                </div>
            ))}
        </div>
    );
};


//mapStateToProps takes the info in the redux store and passes it to state
const mapStateToProps = state => {
    console.log('PROPS in redux store', props)
    return{
      tasks: state
    }
  }
  
  
export default connect(mapStateToProps)(TodoList);
//connect wires our component with the redux store
//it does this through the provider
  