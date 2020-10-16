import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import IDataJson from '../DataJson';
import IProductShoppingCart from '../IProductShoppingCart';
import style from './List.module.css';
import { Link } from 'react-router-dom';

const ImageList  = ({
  data,
  addP
}: {
  data: Array<IDataJson>;
  addP: (product: IProductShoppingCart) => void;
}) : JSX.Element => {

const addProduct = (e) => {
  console.log(e.currentTarget);
  const shirt = JSON.parse(e.currentTarget.value);
  const product = {
    id: shirt.id,
    img: shirt.img,
    title : shirt.title,
    price: shirt.price,
    qty: 1
  };
  addP(product);
};


return (
    <GridList cols={3} cellHeight={"auto"} spacing={4} className={style.gridList}>
      {data.map((shirt) => (
        <GridListTile key={shirt.id} >
          <div className={style.container}>
            <Link to={{
                pathname: `/products/${shirt.id}`,
                state: {data: shirt}
              }} >
                <img src={shirt.img} className={style.img}/> 
            </Link>
          </div>
          <GridListTileBar 
            title={shirt.title}
            titlePosition="top" 
            actionIcon={
              <IconButton   
                aria-label={`shop ${shirt.title}`} 
                color={"primary"} 
                className={style.icon} 
                value={JSON.stringify(shirt)}
                onClick={addProduct}>
                  <AddShoppingCartIcon />
              </IconButton>
            }
            actionPosition="left"
            classes={style.titleBar}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ImageList;