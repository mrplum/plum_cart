import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const SelectButton = ({
    name, 
    values 
  }: {
    name: string;
    values: Array<string>;
  }): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = React.useState<{ value: string; name: string }>({
    value: '',
    name: name,
  });

  const handleChange = (event: React.ChangeEvent<{value: string }>) => {
    setState({
      ...state,
      value: event.target.value,
    });
  };

  return (
    <div>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-select">{name}</InputLabel>
        <Select
          native
          value={state.value}
          onChange={handleChange}
          label= {name}
          inputProps={{
            name: {name},
            id: 'outlined-select',
          }}
        >
          <option aria-label="None" value="" />
          {values.map((value,i) => (
            <option key={i} value={value}> 
              {value}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectButton;