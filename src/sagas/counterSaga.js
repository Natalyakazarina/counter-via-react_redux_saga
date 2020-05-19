import { call, put, takeLatest, all } from "redux-saga/effects";

import counterService from "./../services/counterService";

function* fetchAdd() {
  try {
    let items = yield call(counterService.getItems);

    yield put({ type: "COUNTER/FETCH_COUNTERS_ADD", payload: { items } });
  } catch ({ message }) {
    yield put({ type: "COUNTER/FETCH_COUNTERS_ERROR", payload: { message } });
  }
}

function* fetchDeduct() {
  try {
    let items = yield call(counterService.getItems);

    yield put({ type: "COUNTER/FETCH_COUNTERS_DEDUCT", payload: { items } });
  } catch ({ message }) {
    yield put({ type: "COUNTER/FETCH_COUNTERS_ERROR", payload: { message } });
  }
}

function* fetchAddSaga() {
  yield takeLatest("COUNTER/FETCH_COUNTERS_ADD", fetchAdd);
}

function* fetchDeductSaga() {
  yield takeLatest("COUNTER/FETCH_COUNTERS_DEDUCT", fetchDeduct);
}

export default function* counterSaga() {
  yield all([fetchAddSaga(), fetchDeductSaga()]);
}
