/* Our action creators will return
 * an action packet that our reducer will
 * receive. What does the action packet look like?
 * Note that the action creator is not at all
 * responsible for handling any of the actual
 * logic of updating the centra Redux store. That
 * is left to the reducer(s).
 *
 * SAVETODOITEM     -> saveTodoItem
 * TOGGLETODOITEM   -> toggleTodoItem
 * DELETETODOITEM   -> deleteTodoItem
 *
 *         ... changes to ...
 *
 * SAVELIST             -> saveList
 * EDITLISTDETAILS      -> editList
 * DELETELIST           -> deleteList
 * ADDITEMTOLIST        -> addItemToList        from-- SAVETODOLISTITEM
 * REMOVEITEMFROMLIST   -> removeItemFromList   from-- DELETETODOLIST
 * MODIFYITEMOFLIST     -> modifyItemOfList
 * TOGGLETODOITEM       -> toggleItemOfList     from-- TOGGLETODOITEM
 * EDITLISTNOTES        -> editListNotes
 *
 */
export const SAVETODOITEM = 'SAVETODOITEM';
export const TOGGLETODOITEM = 'TOGGLETODOITEM';
export const DELETETODOITEM = 'DELETETODOITEM';
export const EDITTODOITEMDETAILS = 'EDITTODOITEMDETAILS';

export const saveTodoItem = (todoValue) => {
   // Fill in this function
   return {
        type: SAVETODOITEM,
        payload: {
           todoItem: {value: todoValue, completed:false}
       }
   };
};


export const toggleTodoItem = (todoIndex) => {
   // Fill in this function
   return {
       type: TOGGLETODOITEM,
       payload: {todoIndex: todoIndex}
   };
};


export const deleteTodoItem = (todoIndex) => {
    return {
        type: DELETETODOITEM,
        payload: {todoIndex: todoIndex}
    }
}


export const editTodoItemDetails = (todoItemDetails, todoIndex) => {
    return {
        type: EDITTODOITEMDETAILS,
        payload: {todoItemDetails, todoIndex}
    }
}
