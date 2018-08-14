export default (state , action ) => {
    switch(action.type){
        case OPTION1: 
            return 'option1'
        default: 
            return 'default'
    }
}