import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import IDataJson from "../DataJson";
import style from "./List.module.css";
import { Link } from "react-router-dom";
import addProduct from "../../utils/Products";
import { useIntl } from "react-intl";

const ImageList = ({ data }: { data: Array<IDataJson> }): JSX.Element => {
  const message = useIntl().formatMessage({ id: "prodAdded" });
  const addProductAux = (e) => {
    const shirt = JSON.parse(e.currentTarget.value);
    addProduct(shirt.id, shirt.price, 1, message);
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
