import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BlackButton = withStyles({
  disabled: {
    backgroundColor: "gray",
  },
  root: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "black",
    },
    color: "var(--light)",
  },
})(Button);

export { BlackButton };
