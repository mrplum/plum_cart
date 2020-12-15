import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "../Card";
import style from "./List.module.css";
import IDataJson from "../DataJson";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";

const CardList = ({ data }: { data: Array<IDataJson> }): JSX.Element => {
  const theme = useTheme();

  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <GridList
      className={style.gridList}
      cellHeight={"auto"}
      spacing={1}
      cols={getGridListCols()}
    >
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
                img={shirt.img}
                title={shirt.title}
                price={shirt.price}
              />
            </Link>
          </div>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default CardList;
