export const GET_AUTHED_USERS = 'GET_AUTHED_USER';

export function getAuthedUsers(users) {
    return {
        type: GET_AUTHED_USERS,
        users
    }
}