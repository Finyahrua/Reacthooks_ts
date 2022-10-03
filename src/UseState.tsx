import React, { useState } from "react";

const UseState = () => {
  const [arr, setArr] = useState<number[]>([]);
  return (
    <div>
      <h1 style={{ fontWeight: "bolder", fontSize: 40, marginLeft: "40%" }}>
        Use state hook
      </h1>
      <button
        onClick={() => setArr([...arr, arr.length + 1])}
        style={{
          padding: 10,
          backgroundColor: "#5ff3ed",
          marginRight: 10,
          borderRadius: 5,
          border: "none",
          marginLeft: "40%",
        }}
      >
        Add to array
      </button>
    {/* remove items from the array */}
        
      <button
        onClick={() => setArr([ ...arr.slice(0, arr.length - 1)])}
        style={{
          padding: 10,
          backgroundColor: "#5ff3ed",
          marginRight: 10,
          borderRadius: 5,
          border: "none",
          marginLeft: "10%",
        }}
      >
        Remove from array
      </button>
      <div
        style={{
          padding: 10,
          fontSize: 30,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "40%",
        }}
      >
        {" "}
        {JSON.stringify(arr)}
      </div>
    </div>
  );
};

export default UseState;
