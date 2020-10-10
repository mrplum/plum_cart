import React from 'react';
import ImageList from './components/List/ImageList';
import CardList from './components/List/CardList';
import data from './data.json';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import style from './App.module.css';

import { BrowserRouter as Router } from 'react-router-dom';

/*pasar data con props */
/*sombra a card cuando cursor */

interface IDataJson {
  img: string;
  title: string;
  price: number;
  featured: boolean;
}

interface IProps {}

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

  toggleViewHandler = () : void => {
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

      <ChangeView
        status={IMainProps.status}
        handler={IMainProps.toggleViewHandler}/>

      {IMainProps.status ?
        <CardList data={data} /> :
        <ImageList data={data} />}
    </div>
  );
  
  interface IChangeView {
    status: boolean;
    handler: () => void;
  }

  const ChangeView = IChangeView => (
    <FormGroup>
      <FormControlLabel   
        control={<Switch checked={IChangeView.status} onChange={IChangeView.handler} />}
        label="Card"
      />
    </FormGroup>
   )
        
export default App;
        