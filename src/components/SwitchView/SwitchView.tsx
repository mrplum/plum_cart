import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./SwitchView.module.css";

const BlueSwitch = withStyles({
  switchBase: {
    color: "gray",
    "&$checked": {
      color: "black",
    },
    "&$checked + $track": {
      backgroundColor: "black",
    },
  },
  checked: {},
  track: {},
})(Switch);

interface ISwitchView {
  status: boolean;
  handler: () => void;
}

const SwitchView = (switchProps: ISwitchView): JSX.Element => (
  <FormGroup className={styles.root}>
    <FormControlLabel
      control={<BlueSwitch checked={switchProps.status} onChange={switchProps.handler} />}
      label="Card"
    />
  </FormGroup>
);

export default SwitchView;
