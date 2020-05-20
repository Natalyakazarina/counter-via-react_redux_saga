import { call, put, takeLatest, all, select } from "redux-saga/effects";

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

function* fetchCounters() {
  try {
    let {items} = yield call(counterService.getItems);

    yield put({ type: "COUNTER/FETCH_COUNTERS_SUCCESSFULLY", payload: { counters: items } });
  } catch ({ message }) {
    yield put({ type: "COUNTER/FETCH_COUNTERS_ERROR", payload: { message } });
  }
}

function* increase(action) {
  try {
    let counters = yield select(state => state.counter.counters);
    let indToUpdate;
    counters.forEach((counter, index) => {
      if (counter.id === action.payload.id) {
        indToUpdate = index;
        counters[indToUpdate].value = counters[indToUpdate].value + 1
      }
    });

    yield call(counterService.save, action.payload.id, counters[indToUpdate].value);

    yield put({ type: "COUNTER/SAVE_SUCCESSFULLY", payload: { counters } });
  } catch ({ message }) {
    yield put({ type: "COUNTER/FETCH_COUNTERS_ERROR", payload: { message } });
  }
}

function* decrease(action) {
  try {
    let counters = yield select(state => state.counter.counters);
    let indToUpdate;
    counters.forEach((counter, index) => {
      if (counter.id === action.payload.id) {
        indToUpdate = index;
        counters[indToUpdate].value = counters[indToUpdate].value - 1
      }
    });

    yield call(counterService.save, action.payload.id, counters[indToUpdate].value);

    yield put({ type: "COUNTER/SAVE_SUCCESSFULLY", payload: { counters } });
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

function* fetchCountersSaga() {
  yield takeLatest("COUNTER/FETCH_COUNTERS", fetchCounters);
}

function* increaseSaga() {
  yield takeLatest("COUNTER/INCREASE", increase);
}

function* decreaseSaga() {
  yield takeLatest("COUNTER/DECREASE", decrease);
}

export default function* counterSaga() {
  yield all([fetchAddSaga(), fetchDeductSaga(), fetchCountersSaga(), increaseSaga(), decreaseSaga()]);
}
