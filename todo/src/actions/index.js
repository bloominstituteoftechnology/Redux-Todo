export const ADD ='ADD';
export const REMOVE ='REMOVE';

export  const add =(value) =>{
    console.log("clicked")
    console.log(`-------> "${value}" has been passed in!`)
    return({type:'ADD', payload: value, complete: false})   
 }




export const remove = (value) =>{
    console.log(`this is the value ${value}`)
    return ({type:'REMOVE', payload: false,})
}