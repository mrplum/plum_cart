import { UserAction } from './UserContext.types';

const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    console.log(locale);
  },
};

const defaultCartValue = {
  cart: {
    list: [],
    quantity: 0,
  },
  dispatch: (args: unknown): void => {
    console.log(args);
  },
};

const defaultUserValue = {
  user: {
    fullName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    street: "",
    number: "",
    floor: "",
  },
  dispatch: ({ type, payload }: UserAction): void => {
    console.log(type, payload);
  },
};
export { defaultLanguageValue, defaultCartValue, defaultUserValue };
