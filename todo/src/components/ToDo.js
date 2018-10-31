import React from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo, removeToDo, getTodos } from '../actions';

class ToDo extends React.Component {
    constructor() {
        super()
        this.state = {
            todoText: '',

        };
    };

    componentDidMount(){
        const myTodos = JSON.parse(localStorage.getItem('todoReducer'));
        if (myTodos !== null) {
            this.props.getTodos(myTodos);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todoReducer !== this.props.todoReducer) {
          localStorage.setItem('todoReducer', JSON.stringify(nextProps.todoReducer));
        }
      }

      removeToDo = () => {
        this.props.removeToDo();
      };

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleNewToDo = event => {
        event.preventDefault();
        console.log('I have been clickied');
        this.props.addToDo(this.state.todoText);
        this.setState({ todoText: '' });
    };

    render() {
        const { todos } = this.props;
        let h1Style = {
            color: '#741414',
            textDecoration: 'underline',
            textAlign: 'center',
        }
        let divStyle = {
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px auto',
            backgroundColor: '#F2CAA1',
            padding: '0 0 20px 0',
            border: '2px solid red',
            boxShadow: '0px 1px 6px #3904C2',
        }
        
        return (
            <div style={divStyle}>
                <h1 style={h1Style}>Lambda Redux ToDo</h1>
                <hr/>
                {todos.map((item, index) => {
                 return <div key={index}>
                 <h3 onClick={() => this.props.toggleToDo(index)}
                 style={
                    item.completed
                      ? { color: '#3904C2', textDecoration: 'line-through' }
                      : null
                  }
                 >
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
                <button onClick={() => this.removeToDo()}>Clear Completed</button>
            </div>
        )
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
    { addToDo, toggleToDo, removeToDo, getTodos }
  )(ToDo);