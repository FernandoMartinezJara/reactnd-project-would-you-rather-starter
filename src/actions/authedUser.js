export const SET_AUTHED_USER = 'SET_AUTHED_USER';

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