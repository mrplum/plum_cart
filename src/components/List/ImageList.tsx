import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import IDataJson from '../DataJson';
import style from './List.module.css';

const ImageList  = ({
  data
}: {
  data: Array<IDataJson>;
}) : JSX.Element => {

return (
    <GridList cols={3} cellHeight={"auto"} spacing={4} className={style.gridList}>
      {data.map((shirt) => (
        <GridListTile key={shirt.id} >
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
  );
}

export default ImageList;