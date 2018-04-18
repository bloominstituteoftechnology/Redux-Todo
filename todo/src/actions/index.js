export const ADD ='ADD';


export  const add =(value) =>{
    console.log("clicked")
    console.log(`-------> "${value}" has been passed in!`)
    return({type:'ADD', payload: value})
}