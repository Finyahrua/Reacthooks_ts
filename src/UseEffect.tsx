import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ marginLeft:"40%" }}>
      <h1>UseEffect hook</h1>
      <p style={{ fontWeight:"bold "}}>{count}</p>
    </div>
  );
};

export default UseEffect;
