import React, { useContext } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import IDataJson from "../DataJson";
import style from "./List.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const ImageList = ({ data }: { data: Array<IDataJson> }): JSX.Element => {
  const { dispatch } = useContext(CartContext);
  const addProductAux = (e: React.MouseEvent<HTMLButtonElement>) => {
    const shirt = JSON.parse(e.currentTarget.value);
    dispatch({
      type: "addProduct",
      payload: {
        id: shirt.id,
        title: shirt.title,
        unit_price: shirt.price,
        quantity: 1,
      },
    });
  };

  return (
    <GridList
      cols={3}
      cellHeight={"auto"}
      spacing={4}
      className={style.gridList}
    >
      {data.map((shirt) => (
        <GridListTile key={shirt.id}>
          <div className={style.container}>
            <Link
              to={{
                pathname: `/products/${shirt.id}`,
                state: { data: shirt },
              }}
            >
              <img src={shirt.img} className={style.img} />
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
                onClick={addProductAux}
              >
                <AddShoppingCartIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ImageList;
