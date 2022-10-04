import React, { useReducer } from "react";
const initialState = {
  count: 100,
};

type ACTION_tYPES =
  | {
      type: "increment";
      payload: number;
    }
  | {
      type: "decrement";
      payload: number;
    };
const CounterReducer = (state: typeof initialState, action: ACTION_tYPES) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      throw new Error("bad response");
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <div
      style={{
        padding: 10,
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "40%",
      }}
    >
      <div>
        <h1>Use Reducer Hook</h1>
        <h4>count is :{state.count}</h4>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 500,
            })
          }
        >
          INCREMENT
        </button>
        ||
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 50,
            })
          }
        >
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
