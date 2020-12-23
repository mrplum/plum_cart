import { UserAction } from './UserContext.types';
import { CartAction } from './CartContext.types';

const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    console.log(locale);
  },
};

const defaultCartValue = {
  cart: {
    list: [] as any,
    quantity: 0,
  },
  dispatch: ({ type, payload }: CartAction): void => {
    console.log(type, payload);
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
