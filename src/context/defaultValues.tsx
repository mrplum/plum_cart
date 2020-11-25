const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    locale = locale;
  },
};

const defaultCartValue = {
  list: [],
  quantity: 0,
};

export { defaultLanguageValue, defaultCartValue };
