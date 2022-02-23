import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
      alignItems: "left"
    
    },
    title2: {
      flexGrow: 1,
      textAlign: "center",
      alignItems: "center"
    },
    authOut: {
      flexGrow: 1,
      textAlign: "right",
      alignItems: "right"
    },
  }),
);


const Navbar = ({ username, difficulty, earned }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#212121", color: "#fff" }}>
        <Toolbar>
            <Grid container spacing={1} >
              USUARIO : {username}
            </Grid>
            <Grid container spacing={1} >
              DIFICULTAD : {difficulty}
            </Grid>
            <Grid container spacing={1} >
              GANANCIA : {earned}
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;