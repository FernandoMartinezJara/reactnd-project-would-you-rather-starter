export const GET_AUTHED_USERS = 'GET_AUTHED_USER';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';


export function getAuthedUsers(users) {
    return {
        type: GET_AUTHED_USERS,
        users
    }
}

export function setAuthedUser(userName) {
    return {
        type: SET_AUTHED_USER,
        userName
    }
}

export function handleAuthedUser(userName){
    return(dispatch) => {
        dispatch(setAuthedUser(userName));
    }
}