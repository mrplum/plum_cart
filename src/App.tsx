import React from 'react';
import Main from './components/Main';
import data from './data.json';
import Product from './components/Product';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

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

  toggleViewHandler = (ev: React.ChangeEvent<HTMLInputElement>) : void => {
    ev.preventDefault();
    this.setState(state => ({
      card: !state.card
    }))
  };

  render (): JSX.Element {
    return (
      <Router>
        <Route exact path="/">
          <Main 
          status={this.state.card}
          toggleViewHandler={this.toggleViewHandler}
          data={data} />
        </Route>
        <Route exact path="/products/:id"  render={withRouter(({location}) => <Product data={location.state.data}/>)} />
      </Router>
    );
  }
}


export default App;
