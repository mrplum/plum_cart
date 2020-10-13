import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import {indigo } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const BlueSwitch = withStyles({
  switchBase: {
    color: indigo[300],
    '&$checked': {
      color: indigo[500],
    },
    '&$checked + $track': {
      backgroundColor: indigo[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

interface ISwitchView {
  status: boolean;
  handler: () => void;
}

const SwitchView = (switchProps: ISwitchView) : JSX.Element => (
  <FormGroup>
    <FormControlLabel   
      control={<BlueSwitch checked={switchProps.status} onChange={switchProps.handler} />}
      label="Card"
    />
  </FormGroup>
 );

 export default SwitchView;