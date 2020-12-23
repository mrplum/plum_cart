import React, { useContext, useRef, useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import IProduct from "../IProduct";
import style from "./List.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { useOnScreen } from "../../hooks";

import CircularProgress from "@material-ui/core/CircularProgress";

const ImageList = ({
  data,
  page,
  setPagination,
}: {
  data: Array<IProduct>;
  page: number;
  setPagination: (products: Array<IProduct>) => void;
}): JSX.Element => {
  const { dispatch } = useContext(CartContext);

  const visibleRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(visibleRef);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`https://miguia.herokuapp.com/api/v1/products?page=${page}`);
        const jsonResponse = await response.json();
        setPagination(jsonResponse.data);
      } catch (error) {
        console.warn(error);
      }
    };
    if (isVisible) getProducts();
  }, [isVisible]);

  const addProductAux = (e: React.MouseEvent<HTMLButtonElement>) => {
    const shirt = JSON.parse(e.currentTarget.value);
    dispatch({
      type: "addProduct",
      payload: {
        id: shirt.id,
        image: shirt.attributes.image,
        title: shirt.attributes.name,
        unit_price: shirt.attributes.price,
        quantity: 1,
      },
    });
  };

  if (isVisible) {
    console.log("Loading...");
  }

  return (
    <GridList cols={3} cellHeight={"auto"} spacing={4} className={style.gridList}>
      {data.map((shirt) => (
        <GridListTile key={shirt.id}>
          <div className={style.container}>
            <Link
              to={{
                pathname: `/products/${shirt.id}`,
                state: { data: shirt },
              }}
            >
              <img src={shirt.attributes.image} className={style.img} />
            </Link>
          </div>
          <GridListTileBar
            title={shirt.attributes.name}
            titlePosition="top"
            actionIcon={
              <IconButton
                id="addProduct"
                aria-label={`shop ${shirt.attributes.name}`}
                color={"primary"}
                className={style.icon}
                value={JSON.stringify(shirt)}
                onClick={addProductAux}
              >
                <AddShoppingCartIcon id="addProduct" />
              </IconButton>
            }
            actionPosition="left"
          />
        </GridListTile>
      ))}
      <div ref={visibleRef}>
        <CircularProgress />
      </div>
    </GridList>
  );
};

export default ImageList;
