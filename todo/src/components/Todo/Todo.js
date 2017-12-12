import React,{Component} from 'react';
import './Todo.css';
import {connect} from 'react-redux';
import {addtodo,removetodo} from '../../actions'


class Todo extends Component{
    render(){
        let input;
        
        return (
            <div>
            {this.props.todos.map((todo,i) =>
                 <div key={i}>
                    {todo.value}
                    <button onClick={ e => {
                        // e.preventDefault();
                        this.props.removetodo(todo.id);
                    }}> - </button>
                </div>
            )} 
            <form onSubmit={e => {
                e.preventDefault();
                this.props.addtodo(input.value);
                input.value = '';
                }}>
            <input type='text' placeholder='Enter Task' ref={node => input = node}/>
           </form>
            </div> 
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos:state
    };
};
export default connect(mapStateToProps, {addtodo,removetodo})(Todo);