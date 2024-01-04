import { INCREMENT, DECREMENT, ADD_COMMENTS } from "./Types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const addComments = (title,id) => {
    console.log("addComments>>>",id, title);
    return {
        type:ADD_COMMENTS,
        payload:{title,id}
    }
};
