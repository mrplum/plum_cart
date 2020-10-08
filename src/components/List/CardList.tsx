import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '../Card';
import style from './List.module.css';

const CardList = ({
    data
  }: {
    data: any;
  }) : JSX.Element => {
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

export default CardList;
