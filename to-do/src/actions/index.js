export const CHANGE_TITLE = "CHANGE_TITLE";
export const ADD_FRIEND = "ADD_FRIEND";
export const TOGGLE_BESTIES = "TOGGLE_BESTIES";

export const changeTitle = title => {
  console.log("inside action", title);
  return {
    type: CHANGE_TITLE,
    payload: title
  };
};

export const addFriend = friend => {
  console.log("inside action", friend);
  return {
    type: ADD_FRIEND,
    payload: friend
  };
};

export const toggleBesties = index => {
  return {
    type: TOGGLE_BESTIES,
    payload: index
  };
};
