import React from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo } from '../actions';

class ToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            todoText: '',

        };
    };

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleNewToDo = event => {
        event.preventDefault();
        console.log('I have been clickied');
        this.props.addToDo(this.state.todoText);
    };

    render() {
        return (
            <div>
                <h1>Lambda Redux ToDo</h1>
                <hr />
                {this.props.todos.map((item, index) => {
                 return <div key={index}>
                 <h3 onClick={() => this.props.toggleToDo(index)}>
                   {item.value}
                 </h3>
               </div>   
                })}
                <input 
                    type='text'
                    name='todoText'
                    onChange={ this.handleChanges }
                    placeholder='Task To Do'
                    value={this.state.todoText}
                />
                <button onClick={ this.handleNewToDo } >Add ToDo Here!</button>
            </div>
        );
    }


}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        todos: state.todos,
        
      };
}

export default connect(
    mapStateToProps,
    { addToDo, toggleToDo }
  )(ToDo);