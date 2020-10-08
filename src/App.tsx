import React from 'react';
import { createStyles, Theme, makeStyles, ListSubheader } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';
import classNames from 'classnames';


import style from './App.module.css';

function App() : JSX.Element {
  return (
    <div className={style.root}>
      <div className={style.title}> 
        <h1>The Shirt Store</h1>
      </div>
      <GridList cols={4} cellHeight={"auto"} spacing={1} className={style.gridList}>
        {data.map((shirt) => (
          <GridListTile key={shirt.title} >
            <Card dark={true} img={shirt.img} title={shirt.title} price={shirt.price}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default App;
