import React, { useState, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import style from "./ShippingForm.module.css";
import Mercadopago from "../Mercadopago";
import { CartContext } from "../../context";

const ShippingForm = (): JSX.Element => {
  const [user, setState] = useState<{
    fullName: string;
    email: string;
    country: string;
    s: string;
    city: string;
    zipcode: string;
    street: string;
    number: string;
    floor: string;
  }>({
    fullName: "",
    email: "",
    country: "",
    s: "",
    city: "",
    zipcode: "",
    street: "",
    number: "",
    floor: "",
  });

  const { state } = useContext(CartContext);

  const onChange = (e) => {
    e.preventDefault();
    setState({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const intl = useIntl();
  const {
    fullName,
    email,
    country,
    s,
    city,
    zipcode,
    street,
    number,
    floor,
  } = user;
  return (
    <div className={style.root}>
      <h1 className={style.title}>
        <FormattedMessage id="form" />
      </h1>
      <div className={style.formContainer}>
        <form className={style.form}>
          <label className={style.label}>
            <FormattedMessage id="fullName" />
            <input
              className={style.input}
              type="text"
              value={fullName}
              name="fullName"
              onChange={onChange}
            />
          </label>
          <label className={style.label}>
            <FormattedMessage id="email" />
            <input
              className={style.input}
              type="text"
              value={email}
              name="email"
              onChange={onChange}
            />
          </label>
          <label className={style.label}>
            <FormattedMessage id="address" />
            <input
              className={style.input}
              type="text"
              value={country}
              placeholder={intl.formatMessage({ id: "country" })}
              name="country"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={s}
              placeholder={intl.formatMessage({ id: "state" })}
              name="s"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={city}
              placeholder={intl.formatMessage({ id: "city" })}
              name="city"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={zipcode}
              placeholder={intl.formatMessage({ id: "zipcode" })}
              name="zipcode"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={street}
              placeholder={intl.formatMessage({ id: "street" })}
              name="street"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={number}
              placeholder={intl.formatMessage({ id: "number" })}
              name="number"
              onChange={onChange}
            />
            <input
              className={style.input}
              type="text"
              value={floor}
              placeholder={intl.formatMessage({ id: "floor" })}
              name="floor"
              onChange={onChange}
            />
          </label>
          <Mercadopago cart={state} />
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
