import React from "react";
import { FormattedMessage } from "react-intl";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
//import style from "./Mercadopago.module.css";

const SuccessfulCheck = withStyles({
  root: { color: green[500] },
})(CheckCircleIcon);

const SuccessfulPurchase = (): JSX.Element => {
  return (
    <div>
      <IconButton>
        <SuccessfulCheck />
      </IconButton>
      <h1>
        <FormattedMessage id="successfulPurchase" />
      </h1>
    </div>
  );
};

export default SuccessfulPurchase;
