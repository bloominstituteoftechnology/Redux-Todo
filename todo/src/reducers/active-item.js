export default (stateProp = null, action) => {
    console.log('hi');
    switch (action.type) {
      case 'ITEM_COMPLETED':
        return action.payload;
      default:
        return stateProp;
    }
  };