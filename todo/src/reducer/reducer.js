import { TOGGLE,POST,TYPING,REMOVE } from '../actions/actions';

const store = {
todos:[
{
  value: 'Walk the dog.',
  completed: false
},
{
  value: 'Make working code.',
  completed: false
}
],
newtask:'',
}

export default (state=store, action) => {
switch(action.type){
	case TOGGLE:
	let toggleTodos = state.todos.splice('');
	toggleTodos[action.payload].completed=!toggleTodos[action.payload].completed;
	return ({...state, todos:toggleTodos});
	case POST:
	let newTodos = state.todos.splice('');
	newTodos.push({value:state.newtask,completed:false});
	return({...state, todos:newTodos, newtask:''});
	case TYPING:
	return({...state,newtask:action.payload});
	case REMOVE:
	let removedTodos = state.todos.splice('');
	for(let i=0;i<removedTodos.length;i++){
	if(removedTodos[i].completed===true){removedTodos.splice(i,1);i--;}
	}
	return({...state,todos:removedTodos});
	default:
	return state;
}
};