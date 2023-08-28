import {
    GET_USERS_REQUEST,
    DELETE_USER_REQUEST,
} from './Action';

const initialState = {
    users: [
        {
            id: 1,
            name: "Bret",
            email: "vovantin@gmail.com",
            website: "hildegard.ord"
        },
        {
            id: 2,
            name: "Bret",
            email: "vovantin@gmail.com",
            website: "hildegard.ord"
        }
    ],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        default:
            return state;
    }
};

export default userReducer;