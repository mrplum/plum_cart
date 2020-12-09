import React, { useState, useContext, useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import style from "./ShippingForm.module.css";
import Mercadopago from "../Mercadopago";
import { CartContext, UserContext } from "../../context";
import { Card, Input } from "@material-ui/core";

const ShippingForm = (): JSX.Element => {
  const intl = useIntl();

  const { dispatch } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const [user, setState] = useState<{
    fullName: string;
    email: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    street: string;
    number: string;
    floor: string;
  }>({
    fullName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    street: "",
    number: "",
    floor: "",
  });

  const {
    fullName,
    email,
    country,
    state,
    city,
    zipcode,
    street,
    number,
    floor,
  } = user;

  const handleChange = useCallback(
    (e: { preventDefault: () => void; target: { name: any; value: any } }) => {
      e.preventDefault();
      setState({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );

  const submit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({
        type: "setUser",
        payload: user,
      });
    },
    [user]
  );

  return (
    <div className={style.root}>
      <Card className={style.card}>
        <h1 className={style.title}>
          <FormattedMessage id="form" />
        </h1>
        <div className={style.formContainer}>
          <form id="shipping" onSubmit={submit} className={style.form}>
            <label className={style.label}>
              <FormattedMessage id="fullName" />
              <Input
                className={style.input}
                type="text"
                value={fullName}
                name="fullName"
                onChange={handleChange}
              />
            </label>
            <label className={style.label}>
              <FormattedMessage id="email" />
              <Input
                className={style.input}
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </label>
            <label className={style.label}>
              <FormattedMessage id="address" />
              <Input
                className={style.input}
                type="text"
                value={country}
                placeholder={intl.formatMessage({ id: "country" })}
                name="country"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={state}
                placeholder={intl.formatMessage({ id: "state" })}
                name="state"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={city}
                placeholder={intl.formatMessage({ id: "city" })}
                name="city"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={zipcode}
                placeholder={intl.formatMessage({ id: "zipcode" })}
                name="zipcode"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={street}
                placeholder={intl.formatMessage({ id: "street" })}
                name="street"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={number}
                placeholder={intl.formatMessage({ id: "number" })}
                name="number"
                onChange={handleChange}
              />
              <Input
                className={style.input}
                type="text"
                value={floor}
                placeholder={intl.formatMessage({ id: "floor" })}
                name="floor"
                onChange={handleChange}
              />
            </label>
            <Mercadopago
              cart={cart}
              disabled={user.fullName === "" || user.email === ""}
            />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ShippingForm;
