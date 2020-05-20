import { connect } from "react-redux";
import Counter from "../components/Counter";

const mapStateToProps = (state) => {
  return {
    items: state.counter.counters,
    fetchCounterError: state.counter.fetchCounterError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdd: (value) =>
      dispatch({
        type: "COUNTER/FETCH_COUNTERS_ADD",
        payload: {
          value,
        },
      }),
    fetchDeduct: (value) =>
      dispatch({
        type: "COUNTER/FETCH_COUNTERS_DEDUCT",
        payload: {
          value,
        },
      }),
    fetchCounters: () => {
      dispatch({
        type: "COUNTER/FETCH_COUNTERS",
      })
    },
    decrease: (id) => {
      dispatch({
        type: "COUNTER/DECREASE",
        payload: {
          id,
        },
      })
    },
    encrease: (id) => {
      dispatch({
        type: "COUNTER/INCREASE",
        payload: {
          id,
        },
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
