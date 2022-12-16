import { ADD_COMMENTS , DELETE_COMMENT} from '../Types';

const initialState = {
    comments: [],
    loading: false,
    error: null
}
export const CommentsReducer = (state = initialState, action) => {
    console.log("action>>>", action)
    switch (action.type) {
        case ADD_COMMENTS: {
            const { title, id } = action.payload
            return {
                ...state,
                comments: [...state.comments, { title, id }]
            }
        }
        case DELETE_COMMENT:
            const {id}=action.payload
            const newArr =state.comments.filter(elem=>elem.id!==id);
            console.log("newArr>>",newArr)
            return{
                ...state,
                comments:newArr
            }

        default:
            return state
    }

}