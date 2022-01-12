import axios from "axios";
import {all, takeEvery, call, put, fork} from "redux-saga/effects";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    USER_LOADING_FAILURE,
    USER_LOADING_REQUEST,
    USER_LOADING_SUCCESS
} from "../types";

// Login
const loginUserAPI = (loginData) => {
    console.log(loginData, "loginData");
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    return axios.post("api/auth", loginData, config);
};

function* loginUser(action) {
    try {
        const result = yield call(loginUserAPI, action.payload);
        console.log(result);
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response,
        });
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
}

// LOGOUT
function* logout(action) {
    try {
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LOGOUT_FAILURE,
        });
        console.log(e);
    }
}

function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}

// User Loading
const userLoadingAPI = (token) => {
    console.log(token);
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        config.headers["x-auth-token"] = token;
    }
    return axios.get("api/auth/user", config);
};

function* userLoading(action) {
    try {
        console.log(action, "userLoading");
        const result = yield call(userLoadingAPI, action.payload);
        yield put({
            type: USER_LOADING_SUCCESS,
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: USER_LOADING_FAILURE,
            payload: e.response,
        });
    }
}

function* watchUserLoading() {
    yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

export default function* authSaga(){
    yield all([
        fork(watchLoginUser), fork(watchLogout), fork(watchUserLoading)
    ])
};