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


import './App.module.css';

function App() : JSX.Element {
  return (
    <div className={'root'}>
      <GridList cellHeight={400} spacing={1} className={'gridList'}>
        {data.map((shirt) => (
          <GridListTile key={shirt.title} cols={shirt.featured ? 2 : 1} rows={shirt.featured ? 2 : 1}>
            <img src={shirt.img} />
            <GridListTileBar 
              title={shirt.title}
              titlePosition="top" 
              actionIcon={
                <IconButton aria-label={`star ${shirt.title}`} className={'icon'}>
                    <AddShoppingCartIcon />
                </IconButton>
              }
              actionPosition="left"
              className={'titleBar'}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default App;
