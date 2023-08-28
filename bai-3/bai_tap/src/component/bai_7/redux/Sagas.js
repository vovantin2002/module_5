import {put, takeLatest, call} from 'redux-saga/effects';
import {
    GET_USERS_REQUEST,
    DELETE_USER_REQUEST,
} from './Action';
import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

function* getUsersSaga() {
    const response = yield call(axios.get, API_URL);
    yield put({payload: response.data});
}

function* deleteUserSaga(action) {
    const response = yield call(axios.get, API_URL);
    const {userId} = action.payload;
    yield call(axios.delete, `${API_URL}/${userId}`);
    yield put({payload: userId});
    alert(response.status);
}

function* userSaga() {
    yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
    yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
}

export default userSaga;