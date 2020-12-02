import React, { createContext, useReducer } from "react";
import { defaultUserValue } from "./defaultValues";

const UserContext = createContext(defaultUserValue);

const reducer = (user, action) => {
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
