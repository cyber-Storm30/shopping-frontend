import { takeLatest, all } from "@redux-saga/core/effects";
import { LOGIN_START } from "../Actions/auth";
import { GET_POSTS } from "../Actions/products";
import { handleLogin } from "./handlers/auth";
import { handlegetPost } from "./handlers/products";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_POSTS, handlegetPost),
    takeLatest(LOGIN_START, handleLogin),
  ]);
}
