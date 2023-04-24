import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Skin Cancer Classification
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/Datatalking">
            Dataset Introduction
          </Button>
          
          <Button color="inherit" component={Link} to="/Analysis">
            Experiments and Analysis
          </Button>

          <Button color="inherit" component={Link} to="/DetectSkin">
          Detect Skin Cancer
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
