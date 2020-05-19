import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Counter({ items, fetchAdd, fetchDeduct, fetchCounterError }) {
  useEffect(() => {
    fetchAdd();
  }, [fetchAdd]);

  useEffect(() => {
    fetchDeduct();
  }, [fetchDeduct]);

  useEffect(() => {
    if (fetchCounterError) {
      alert(fetchCounterError);
    }
  }, [fetchCounterError]);

  return (
    <div className="container-counters">
      {items.map(({ id, value }) => (
        <div className="counters-buttons" key={id}>
          <h1>{value}</h1>
          <button title="Decrease" onClick={this.fetchDeduct.bind(this, id)}>
            Decrease
          </button>
          <button title="Increase" onClick={this.fetchAdd.bind(this, id)}>
            Increase
          </button>
        </div>
      ))}
    </div>
  );
}

Counter.propTypes = {
  items: PropTypes.array,
  fetchAdd: PropTypes.func,
  fetchDeduct: PropTypes.func,
  fetchCounterError: PropTypes.string,
};

export default Counter;
