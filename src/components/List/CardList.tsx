import React, { useRef, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "../Card";
import style from "./List.module.css";
import IProduct from "../IProduct";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { useOnScreen } from "../../hooks";
import CircularProgress from "@material-ui/core/CircularProgress";

const CardList = ({
  data,
  page,
  setPagination,
}: {
  data: Array<IProduct>;
  page: number;
  setPagination: (products: Array<IProduct>) => void;
}): JSX.Element => {
  const theme = useTheme();

  const visibleRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(visibleRef);

  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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

  const getGridListCols = () => {
    if (xl) {
      return 6;
    }
    if (md) {
      return 4;
    }
    if (sm) {
      return 2;
    }
    return 1;
  };

  if (isVisible) {
    console.log("Loading...");
  }

  return (
    <div className={style.root}>
      <GridList className={style.gridList} cellHeight={"auto"} spacing={1} cols={getGridListCols()}>
        {data.map((shirt) => (
          <GridListTile key={shirt.id}>
            <div className={style.cardContainer}>
              <Link
                to={{
                  pathname: `/products/${shirt.id}`,
                  state: { data: shirt },
                }}
              >
                <Card
                  id={shirt.id}
                  dark={true}
                  img={shirt.attributes.image}
                  title={shirt.attributes.name}
                  price={shirt.attributes.price}
                />
              </Link>
            </div>
          </GridListTile>
        ))}
      </GridList>
      <div ref={visibleRef}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default CardList;
