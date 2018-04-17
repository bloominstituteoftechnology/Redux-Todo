export default (stateProp = null, action) => {
    switch (action.type) {
        case 'listItem_completed':
        return action.payload;
        default: return stateProp;
    }
};