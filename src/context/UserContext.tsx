import React, { createContext, useReducer } from "react";
import { defaultUserValue } from "./defaultValues";

interface IUser {
  fullName: string;
  email: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  street: string;
  number: string;
  floor: string;
}
const UserContext = createContext(defaultUserValue);

const reducer = (user: IUser, action) => {
  switch (action.type) {
    case "setUser": {
      return action.payload;
    }
    default:
      throw new Error();
  }
};

const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [user, dispatch] = useReducer(reducer, {
    fullName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    street: "",
    number: "",
    floor: "",
  });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
