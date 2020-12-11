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

interface UserAction {
  type: unknown; 
  payload: IUser; 
}

interface UserReducerParameters {
  user: IUser;
  action: UserAction;
}

export type { IUser, UserAction, UserReducerParameters };
