import update from "immutability-helper";

const initialState = {
  counters: [],
  fetchCounterError: "",
};

let counterValue = initialState.counters.value;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER/FETCH_COUNTERS_ADD':
      let addValue = counterValue + 1;

      return update(state, {
        counters: {
          $push: [
            {
              id: state.id,
              value: addValue,
            },
          ],
        },
      });
    case 'COUNTER/FETCH_COUNTERS_DEDUCT':
      let deductValue;
      if (counterValue <= 0) {
        deductValue = 0;
      } else {
        deductValue = counterValue - 1;
      }

      return update(state, {
        counters: {
          $push: [
            {
              id: state.id,
              value: deductValue,
            },
          ],
        },
      });
    case 'COUNTER/FETCH_COUNTERS_ERROR':
      return update(state, {
        $merge: {
          fetchCounterError: action.payload.message,
        },
      });
    default:
      return state;
  }
}

export default counterReducer;
