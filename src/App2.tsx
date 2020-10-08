import React from 'react';
import { createStyles, Theme, makeStyles, ListSubheader } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';
import classNames from 'classnames';


import style from './App.module.css';

function App2() : JSX.Element {
  return (
    <div className={style.root}>
      <div className={style.title}> 
        <h1>The Shirt Store</h1>
      </div>
      <GridList cols={3} cellHeight={"auto"} spacing={4} className={style.gridList}>
        {data.map((shirt) => (
          <GridListTile key={shirt.title} >
            <div className={style.container}>
                <img src={shirt.img} className={style.img}/> 
            </div>
            <GridListTileBar 
              title={shirt.title}
              titlePosition="top" 
              actionIcon={
                <IconButton   aria-label={`shop ${shirt.title}`} color={"primary"} className={style.icon}>
                    <AddShoppingCartIcon />
                </IconButton>
              }
              actionPosition="left"
              classes={style.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default App2;