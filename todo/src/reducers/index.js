import {ADD} from '../actions';

export default (posts = [], action) => {
    switch (action.type) {
        case ADD:
        return [
        ...posts,
        {
          text: action.text,
          completed: false
        }
        ]
        default:
            return posts;
    }
};