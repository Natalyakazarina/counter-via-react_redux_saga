import update from "immutability-helper";

const initialState = {
  counters: [],
  fetchCounterError: "",
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER/FETCH_COUNTERS_ADD':
      const changeAddState = state.counters.slice();
      let indexToUpdate;
      changeAddState.forEach((counter, index, value) => {
        if (counter.id === action.payload.id) {
          indexToUpdate = index;
          changeAddState[indexToUpdate].value=state.counters[indexToUpdate].value + 1
        }
      });
      return update(state, {
        $merge:
          {
            counters: changeAddState,
          }
      });
    case 'COUNTER/FETCH_COUNTERS_DEDUCT':

      const changeDeductState = state.counters.slice();
      let indexUpdate;
      changeDeductState.forEach((counter, index, value) => {
        if (counter.id === action.payload.id) {
          indexUpdate = index;
          changeDeductState[indexUpdate].value=state.counters[indexUpdate].value - 1
        }
      });
      return update(state, {
        $merge:
          {
            counters: changeDeductState,
          }
      });

    case 'COUNTER/FETCH_COUNTERS_ERROR':
      return update(state, {
        $merge: {
          fetchCounterError: action.payload.message,
        },
      });
    case 'COUNTER/FETCH_COUNTERS_SUCCESSFULLY':
      return update(state, {
        $merge: {
          counters: action.payload.counters,
        },
      });
    case 'COUNTER/SAVE_SUCCESSFULLY': {
      const toUpdate = action.payload.counters.slice();

      return update(state, {
        $merge:
          {
            counters: toUpdate,
          }
      });
    }

    default:
      return state;
  }
}

export default counterReducer;
