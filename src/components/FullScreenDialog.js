import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import { Container, GridList, GridListTile } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '16px',
  },
  appBar: {
    position: 'fixed',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  gridList: {
    marginTop: '65px!important',
    marginLeft: '0px',
    marginRight: '0px',
    marginBottom: '0px',
  },
  gridListTile: {
    height: '644px!important',
    [theme.breakpoints.down('400')]: {
      height: '324px!important',
    }
  },
  imageStyle: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const { open, onDialogClose, type, images } = props;

  const handleClose = () => {
    onDialogClose();
  };

  const imageTypes = ["HeadShots", "Bridal", "High Fashion"];

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Container >
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {imageTypes[type]}
            </Typography>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
          <div className={classes.root}>
            <GridList 
            cellHeight={'auto'} 
            cols={4}
            classes={{
              root: classes.gridList
            }}
            >
              {images.map(img => (
                <GridListTile key={img.id} cols={img.cols || 1}>
                  <img className={classes.imageStyle} src={img.key}/>
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}
