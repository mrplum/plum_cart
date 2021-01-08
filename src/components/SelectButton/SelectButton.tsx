import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const SelectButton = ({
  name,
  values,
  valuesName,
  handle,
  defaultValue,
  spacing,
}: {
  name: string;
  values: Array<string>;
  valuesName: Array<string>;
  handle: (value: string) => void;
  defaultValue: string;
  spacing: number;
}): JSX.Element => {
  const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
      borderWidth: 12,
      margin: spacing !== null ? spacing : theme.spacing(1),
      marginBottom: spacing === null || spacing === 0 ? theme.spacing(1) : spacing,
      minWidth: 120,
    },
    select: {
      color: "gray",
    },
    label: {
      color: "gray",
    },
    option: {
      color: "black",
    },
    input: {
      borderWidth: 16,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [state, setState] = useState<{ value: string; name: string }>({
    value: defaultValue,
    name: name,
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (typeof event.target.value === "string") {
      const actualValue = event.target.value.toString();
      event.preventDefault();
      setState({
        ...state,
        value: actualValue,
      });
      handle(actualValue);
    }
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-select" className={classes.label} focused={false}>
        {name}
      </InputLabel>
      <Select
        native
        value={state.value}
        onChange={handleChange}
        label={name}
        className={classes.select}
        inputProps={{
          name: name,
          id: "outlined-select",
        }}
      >
        {values.map((v, i) => (
          <option key={i} value={v} className={classes.option}>
            {valuesName[i]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectButton;
