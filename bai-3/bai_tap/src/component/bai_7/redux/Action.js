export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST,
});

export const deleteUserRequest = (userId) => ({
    type: DELETE_USER_REQUEST,
    payload: userId,
});





