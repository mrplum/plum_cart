const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    locale;
  },
};

const defaultCartValue = {
  state: {
    list: [],
    quantity: 0,
  },
  dispatch: (args: never): void => {
    args;
  },
};

export { defaultLanguageValue, defaultCartValue };
