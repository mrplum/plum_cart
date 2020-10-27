import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const SelectButton = ({
  name,
  values,
  valuesName,
  handle,
  defaultValue,
}: {
  name: string;
  values: Array<string>;
  valuesName: Array<string>;
  handle: (value: string) => void;
  defaultValue: string;
}): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = useState<{ value: string; name: string }>({
    value: defaultValue,
    name: name,
  });

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    event.preventDefault();
    setState({
      ...state,
      value: event.target.value,
    });
    handle(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-select">{name}</InputLabel>
        <Select
          native
          value={state.value}
          onChange={handleChange}
          label={name}
          inputProps={{
            name: name,
            id: "outlined-select",
          }}
        >
          {values.map((v, i) => (
            <option key={i} value={v}>
              {valuesName[i]}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
