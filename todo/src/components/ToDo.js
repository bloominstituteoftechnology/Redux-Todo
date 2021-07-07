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
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px auto',
            backgroundColor: '#A1ADF2',
            padding: '0 0 15px 0',
            border: '2px solid red',
            boxShadow: '0px 1px 6px #3904C2',
        }
        let hrStyle = {
            width: '80%',
          }
        let buttonStyle = {
          width: '100px',
          height: '50px',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer',
         margin: '5px 0',
        }
        let formStyle = {
          width: '100%',
          height: '40px',
         backgroundColor: 'lightgrey'
        }
        
        return (
            <div style={divStyle}>
                <h1 style={h1Style}>Lambda Redux ToDo</h1>
                <hr style = {hrStyle}/>
                {todos.map((item, index) => {
                 return <div key={index}>
                 <h3 onClick={() => this.props.toggleToDo(index)}
                 style={
                    item.completed
                      ? { color: '#3904C2', textDecoration: 'line-through', transition: '1s' }
                      : null
                  }
                 >
                   {item.value}
                 </h3>
               </div>   
                })}
            <button style={buttonStyle} onClick={ this.handleNewToDo } >Add ToDo Here!</button>
            <button style={buttonStyle} onClick={() => this.removeToDo()}>Clear Completed</button>                
            <form onSubmit={this.handleNewToDo }>
              <input style={formStyle}
                      type='text'
                      name='todoText'
                      onChange={ this.handleChanges }
                      placeholder='Task To Do'
                      value={this.state.todoText}
                  />
                </form>

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