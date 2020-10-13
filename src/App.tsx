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

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

interface IDataJson {
  id: string;
  img: string;
  title: string;
  price: number;
  featured: boolean;
}

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

  toggleViewHandler = (ev: React.ChangeEvent<HTMLInputElement>) : void => {
    ev.preventDefault();
    this.setState(state => ({
      card: !state.card
    }))
  };

  render (): JSX.Element {
    return (
      <Router>
        <Main 
        status={this.state.card}
        toggleViewHandler={this.toggleViewHandler}
        data={data} />
        <Route exact path="/products/:id" render={withRouter(({location}) => <div>`{location.state.data['title']}`</div>)} />
      </Router>
    );
  }
}

interface IMainProps {
  status: boolean;
  toggleViewHandler: () => void;
  data: IDataJson;
}

const Main = IMainProps => (
  <div className={style.root}>
    <div className={style.title}> 
      <h1>The Shirt Store</h1>
    </div>

    <SwitchView
      status={IMainProps.status}
      handler={IMainProps.toggleViewHandler} />

    {IMainProps.status ?
      <CardList data={data} /> :
      <ImageList data={data} />}
  </div>
);


interface ISwitchView {
  status: boolean;
  handler: () => void;
}

const SwitchView = ISwitchView => (
  <FormGroup>
    <FormControlLabel   
      control={<BlueSwitch checked={ISwitchView.status} onChange={ISwitchView.handler} />}
      label="Card"
    />
  </FormGroup>
 )
export default App;
