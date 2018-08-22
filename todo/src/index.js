import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';


var todoReducer = (state=[],action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state,{
        id:action.id,
        name:action.name,
        completed:false
      }]
    case 'TOGGLE_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id)
          return {
            ...todo,
            completed: !todo.completed
          }
        return todo;
      })
    default:
      return state;
  }
}

var store = createStore(todoReducer);
var counter =0;
const renderApp = () => {render(<App />, document.getElementById('root'))}

class App extends React.Component{
  onAdd = () =>{
    store.dispatch({
      type: "ADD_TODO",
      id: ++counter,
      name: this.input.value
    });
    this.input.value ="";
  }

  toggleTodo = (id) =>{
    store.dispatch({
      type:"TOGGLE_COMPLETE",
      id
    });
  }

  render(){
    return (
      <div>
        <div>
          <input ref={pointer => this.input = pointer} type="text" />
          <button onClick={this.onAdd}> add</button>
        </div>
        <div>
        <ul>
          {store.getState().map(todo => {
            return (
              <li style={{ cursor:"pointer",textDecoration: todo.completed ? "line-through" :"none"}}
              onClick={() => this.toggleTodo(todo.id)} key={todo.id}>{todo.name}</li>
              )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

store.subscribe(renderApp);
store.subscribe(()=> console.log(store.getState()));
renderApp();
