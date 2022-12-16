import { DECREMENT, INCREMENT, ADD_COMMENTS, DELETE_COMMENT } from "./Types";

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

export const deleteComment=(id)=>{
    return{
        type:DELETE_COMMENT,
        payload:{id}
    }
}
