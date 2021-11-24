import { GET_AUTHED_USERS, SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = {}, action){
    switch (action.type) {
        case GET_AUTHED_USERS:
            return {
                ...state,
                ...action.users
            }
        case SET_AUTHED_USER:
            return action.userName
        default:
            return state
    }
}