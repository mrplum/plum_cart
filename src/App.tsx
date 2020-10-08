import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
import data from './data.json';
import Card from './components/Card';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'rgb(131, 155, 167)'/*theme.palette.background.paper*/,
    },
    gridList: {
      justifyContent: 'space-around',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      width: 700,
      height: 700,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }),
);

function App() : JSX.Element {
  const classes = useStyles();
  return (
<div className={classes.root}>
<GridList cellHeight={400} spacing={1} className={classes.gridList}>
  {data.map((shirt) => (
    <GridListTile key={shirt.title} cols={shirt.featured ? 2 : 1} rows={shirt.featured ? 2 : 1}>
      <div>
          <Card
                img={shirt.img}
                title={shirt.title}
                price={shirt.price}
                dark = {false}

          />
      </div>
      <GridListTileBar 
        title={shirt.title}
        titlePosition="top" 
        actionIcon={
          <IconButton aria-label={`star ${shirt.title}`} className={classes.icon}>
          {/*  <StarBorderIcon />*/}
          </IconButton>
        }
        actionPosition="left"
        className={classes.titleBar}
      />
    </GridListTile>
  ))}
</GridList>
</div>
  );
}

export default App;
