export const TOGGLE ='TOGGLE';
export const POST = 'POST';
export const TYPING = 'TYPING';
export const REMOVE = 'REMOVE';

export const typing = (e) => {
return ({type:TYPING,payload:e});
}

export const toggle = (index) => {
return({type:TOGGLE,payload:index});
}

export const post = () => {
return({type:POST});
}

export const remove = () => {
return ({type:REMOVE});
}