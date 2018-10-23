export const HANDLE_CHANGE = 'HANDLE_CHANGE';



export const onChange = event => { 
    return {
        type: 'HANDLE_CHANGE',
        payload: event.target.value
    }
}

