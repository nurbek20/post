import { INCREMENT,DECREMENT } from "../Types"

const initialState={
    likes:0
}

export const LikeReducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                likes:state.likes+1
            }
        
        default:
            return state
    }
}   