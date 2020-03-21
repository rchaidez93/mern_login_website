import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Checkbox from '@material-ui/core/Checkbox';
import DropZone from '../components/DropZone';
import axios from 'axios';
import LockIcon from '@material-ui/icons/Lock';
import { AuthContext } from '../context/auth-context';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 450,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  imageStyle: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  }
}));

const imgarray = [
  {
    key: `https://source.unsplash.com/random`,
    index: 0,
  },
  {
    key: `https://source.unsplash.com/random`,
    index: 1,
  },
  {
    key: `https://source.unsplash.com/random`,
    index: 2,
  },
  {
    key: `https://source.unsplash.com/random`,
    index: 3,
  },
];

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageList, setImageList] = useState([]);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [removeFiles, setRemoveFiles] = useState(false); 

  const { authObj } = useContext(AuthContext);

  useEffect(() => {

    let imgs = [];

    if(imgarray.length > 0){
      imgarray.forEach((img, index) => {
        imgs.push(
          {
              key:img.key,
              index: index,
              checked:false
          }
        );
      })
    }
    setImageList(imgs);
  }, []);

  const selectOptions = ["Landing Image", "HeadShots", "Bridal", "High Fashion"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // handle images checked 
  const handleCheckChange = index => event => {
    let selectedIndex = imageList[index];
    let updateImageList = { 
      ...imageList, 
      [index]:{
        ...selectedIndex,
        [`checked`]: event.target.checked
      }
    };
    const updatedImagesArray = Object.values(updateImageList);
    setImageList(updatedImagesArray);
  }

  // get specific type of images
  const handleListItemClick = (index) => {

    let category = "";
    if(index === 0){
      category = "main";
    }
    else if(index === 1){
      category = "headShot";
    }
    else if(index === 2){
      category = "bridal";
    }
    else{
      category = "highFashion"
    }
    let imgs = [];
    if(imgarray.length > 0){
      imgarray.forEach((img, index) => {
        imgs.push(
          {
              key:img.key,
              index: index,
              checked:false
          }
        );
      })
    }
    setSelectedIndex(index);
    setImageList(imgs);
    setRemoveFiles(true);

  };

  const handleUpload = (images) => {
    
    let category = "";
    if(selectedIndex === 0){
      category = "main";
    }
    else if(selectedIndex === 1){
      category = "headShot";
    }
    else if(selectedIndex === 2){
      category = "bridal";
    }
    else{
      category = "highFashion"
    }

    // todo add images to db
    for(const value in images){

    }

  };

  // todo delete images from db
  const handleDelete = () => {
    
  };


  const mainListItems = (
    <div>
      <ListItem 
        button
        selected={selectedIndex === 0}
        onClick={() => handleListItemClick(0)}
      >
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Landing Image" />
      </ListItem>
      <ListItem 
        button
        selected={selectedIndex === 1}
        onClick={() => handleListItemClick(1)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="HeadShots" />
      </ListItem>
      <ListItem 
        button
        selected={selectedIndex === 2}
        onClick={() => handleListItemClick(2)}
      >
        <ListItemIcon>
          <CameraAltIcon />
        </ListItemIcon>
        <ListItemText primary="Bridal" />
      </ListItem>
      <ListItem 
        button
        selected={selectedIndex === 3}
        onClick={() => handleListItemClick(3)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="High Fashion" />
      </ListItem>
    </div>
  );

  if(imageList === null) return <div>...Loading</div>;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {selectOptions[selectedIndex]}
          </Typography>
          <IconButton label="Logout" color="inherit" onClick={() => authObj.logout()}>
              <LockIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Upload new images to selected category or delete selected images */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <DropZone 
                removeFiles={removeFiles}
                onUpload={handleUpload}
                onDelete={handleDelete}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper>
                <GridList cellHeight={'auto'} className={classes.gridList} cols={4}>
                  {imageList.map((image,key) => (
                    <GridListTile key={key} cols={1}>
                       <Checkbox
                        style={{position:'absolute', zIndex:2,left:0}}
                        checked={image.checked}
                        onChange={handleCheckChange(image.index)}
                        value={image.img}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                      <img className={classes.imageStyle} src={image.key}/>              
                    </GridListTile>
                  ))}
                </GridList>
                <br/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}