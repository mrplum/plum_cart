import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: spacing !== null ? spacing : theme.spacing(1),
        marginBottom:
          spacing === null || spacing === 0 ? theme.spacing(1) : spacing,
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    })
  );
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
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-select">{name}</InputLabel>
      <Select
        native
        value={state.value}
        onChange={handleChange}
        label={name}
        inputProps={{
          name: name,
          id: 'outlined-select',
        }}
      >
        {values.map((v, i) => (
          <option key={i} value={v}>
            {valuesName[i]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectButton;
