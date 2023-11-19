import React, { useState } from "react";
import PropTypes from "prop-types";

CounterFuncComponent.propTypes = {};

function CounterFuncComponent(props) {
  const [count, setCount] = useState(0);
  const handleUpdateCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You click {count} time</p>
      <button onClick={handleUpdateCount}>Click me</button>
    </div>
  );
}

export default CounterFuncComponent;
