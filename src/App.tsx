import React from 'react';
import ImageList from './components/List/ImageList';
import CardList from './components/List/CardList';
import data from './data.json';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { purple } from '@material-ui/core/colors';

/*pasar data con props */
/*sombra a card cuando cursor */

interface IProps {
}

interface IState {
  card : boolean;
}

class App extends React.Component<IProps,IState>{

  constructor(props: IProps){
    super(props);
    this.state = {
      card : true
    };
  }

  render (): JSX.Element {
  return (
    <div >
      <FormGroup>
      <FormControlLabel
        control={<Switch checked={this.state.card} onChange={() =>{this.setState ({card : !this.state.card});}} />}
        label="Card"
      />
    </FormGroup>
    </div>
  );
}
}

export default App;
