export const ADD_TODO = 'ADD_TODO';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';

export const addtodo = (props) => {
    console.log('addtodo activated');
    return{
      type:'ADD_TODO',
      payload:props
  }
      
    
}

export const changecompleted = (props)=>{
    console.log('changecompleted activated');
    return{
        type:'CHANGE_COMPLETED',
        payload:props
    }
}