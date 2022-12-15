import { DECREMENT, INCREMENT, ADD_COMMENTS } from "./Types";

export const icrement = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

//? comments 
export const addComments = (title, id) => {
    console.log("title>>>", title, "id>>>", id)
    return {
        type: ADD_COMMENTS,
        payload: { title, id }
    }
}

