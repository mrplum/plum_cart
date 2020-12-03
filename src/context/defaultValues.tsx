const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    locale;
  },
};

const defaultCartValue = {
  cart: {
    list: [],
    quantity: 0,
  },
  dispatch: (args: unknown): void => {
    args;
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
    args;
  },
};
export { defaultLanguageValue, defaultCartValue, defaultUserValue };
