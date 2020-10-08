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
    <GridList cols={4} cellHeight={"auto"} spacing={1} className={style.gridList}>
      {data.map((shirt) => (
        <GridListTile key={shirt.title} >
          <div className={style.cardContainer}>
            <Card dark={true} img={shirt.img} title={shirt.title} price={shirt.price}/>
          </div>
        </GridListTile>
      ))}
    </GridList>
  );
}

export default CardList;
