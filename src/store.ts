import { createContext } from "react";

export const intialState = {
  fName: "John",
  lName: "Doe",
};

export type UserType = typeof intialState;

const UserContext = createContext<UserType>(intialState);
export default UserContext;
