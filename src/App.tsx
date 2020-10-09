import React from 'react';
import ImageList from './components/List/ImageList';
import CardList from './components/List/CardList';
import data from './data.json';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import {indigo } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import style from './App.module.css';

interface IProps {}

interface IState {
  card : boolean;
}

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

class App extends React.Component<IProps,IState>{

  constructor(props: IProps){
    super(props);
    this.state = {
      card : true
    };
  }

  render (): JSX.Element {
  return (
    <div className={style.root}>
      <div className={style.title}> 
        <h1>The Shirt Store</h1>
      </div>
      <FormGroup>
        <FormControlLabel 
          className={style.switch}
          control={<BlueSwitch className={style.switch2}  checked={this.state.card} onChange={() =>{this.setState ({card : !this.state.card});}} />}
          label="Card"
        />
      </FormGroup>
      {this.state.card ? 
          <CardList data={data} /> : 
          <ImageList data={data} />}
    
    </div>
  );
}
}

export default App;
