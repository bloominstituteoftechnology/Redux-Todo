import NEW_TODO from "../actions/index";


const initialState = [{
    id: 0,
    value: "",
}]



export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){
            case NEW_TODO: 
                return { previousState }
        }
}