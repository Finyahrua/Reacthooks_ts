import React, { useContext, useState } from "react";
import UserContext, { UserType,intialState } from "./store";
const ConsumerComponent = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h5>First Name: {user.fName}</h5>
      <h5>Last Name: {user.lName}</h5>
    </div>
  );
};

const UseContext = () => {
  const [user, setUser] = useState<UserType>(intialState);
  return (
    <UserContext.Provider value={user}>
      <div style={{ marginLeft: "40%" }}>
        <div>
          <h1>UseContext hook</h1>
          <ConsumerComponent />
          <button onClick={()=>{
            setUser({
              fName: "Finyah",
              lName: "John",
            });
          }}>
            Change context 
          </button>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default UseContext;
