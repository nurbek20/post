import { ADD_COMMENTS } from "../Types";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const CommentsReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case ADD_COMMENTS:{
            const {title,id}=action.payload
            return {
                ...state,
                comments:[...state.comments,{title,id}]
            }
        }

        default:
            return state
    }
};
