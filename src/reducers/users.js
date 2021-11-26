import { GET_AUTHED_USERS } from "../actions/users";

export default function users(state = {}, action){
    switch (action.type) {
        case GET_AUTHED_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}