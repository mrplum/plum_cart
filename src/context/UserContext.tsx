import React, { createContext, useReducer } from "react";
import { defaultUserValue } from "./defaultValues";
import { IUser, UserAction } from './UserContext.types';

const UserContext = createContext(defaultUserValue);

const reducer = (user: IUser, action: UserAction): IUser => {
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
  const initialState: IUser = {
    fullName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    street: "",
    number: "",
    floor: "",
  };

  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
