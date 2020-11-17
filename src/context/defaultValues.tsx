const defaultLanguageValue = {
  languages: [],
  locale: "en-US",
  toggleLocale: (locale: string): void => {
    locale;
  },
};

const defaultCartValue = {
  list: [],
  quantity: 0,
  addProduct: (
    id: string,
    price: number,
    qty: number,
    message: string
  ): void => {
    id;
    price;
    message;
    qty;
  },
  deleteProduct: (id: string): void => {
    id;
  },
};

export { defaultLanguageValue, defaultCartValue };
