import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '../Card';
import style from './List.module.css';
import IDataJson from '../DataJson';
import { Link } from 'react-router-dom';

const CardList = ({
    data
  }: {
    data: Array<IDataJson>;
  }) : JSX.Element => {
  return (
    <GridList cols={4} cellHeight={"auto"} spacing={1} className={style.gridList}>
      {data.map((shirt) => (
        <GridListTile key={shirt.id} >
          <div className={style.cardContainer}>
            <Link to={{
              pathname: `/products/${shirt.id}`,
              state: {data: shirt}
            }} >
              <Card dark={true} img={shirt.img} title={shirt.title} price={shirt.price}/>
            </Link>
          </div>
          
        </GridListTile>
      ))}
    </GridList>
  );
}

export default CardList;
