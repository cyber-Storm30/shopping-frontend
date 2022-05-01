import { call, put } from "@redux-saga/core/effects";
import { setPosts } from "../../Actions/products";
import { requestgetPost } from "../requests/products";

export function* handlegetPost() {
  try {
    const res = yield call(requestgetPost);
    yield put(setPosts(res.data));
  } catch (err) {
    console.log(err);
  }
}
