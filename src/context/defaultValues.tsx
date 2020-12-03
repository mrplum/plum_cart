const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    locale = locale;
  },
};

const defaultCartValue = {
  cart: {
    list: [],
    quantity: 0,
  },
  dispatch: (args: unknown): void => {
    args = args;
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
  dispatch: (args: unknown): void => {
    args = args;
  },
};
export { defaultLanguageValue, defaultCartValue, defaultUserValue };
