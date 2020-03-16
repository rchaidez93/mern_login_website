import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, Link } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space-evenly',
    overflowX: 'auto',
  },
  toolbarLink: {
    cursor: 'pointer'
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const sections = [
  'home',
  'about',
  'portfolio',
  'contact',
];

export default function AppBarNav(props) {
  const classes = useStyles();


  return (
    <React.Fragment>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar color="inherit">
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href={`#${section}`}
              className={classes.toolbarLink}
            >
              {section.toLocaleUpperCase()}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    </React.Fragment>
  );
}