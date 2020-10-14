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
    values,
    handle 
  }: {
    name: string;
    values: Array<number>;
    handle: (event: React.ChangeEvent<{value: number }>) => void;
  }): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = React.useState<{ value:number; name: string }>({
    value: 1,
    name: name,
  });

  const handleChange = (event: React.ChangeEvent<{value: number }>) => {
    event.preventDefault();
    console.log(event);
    setState({
      ...state,
      value: event.target.value,
    });
    handle(event);
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