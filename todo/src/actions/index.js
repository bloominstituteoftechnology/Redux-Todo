export const ADD_TODO = 'ADD_TODO';
export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';

export const addtodo = (props) => {
    return{
      type:'ADD_TODO',
      payload:props
  }
      
    
}

export const changecompleted = (props)=>{
    return{
        type:'CHANGE_COMPLETED',
        payload:props
    }
}