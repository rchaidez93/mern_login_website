import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    minHeight: '785px',
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: `url(https://source.unsplash.com/random)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  }));

function Home() {
  const classes = useStyles();
    return (
      <>
        <Paper className={classes.mainFeaturedPost}>
        {
          <img
            style={{ display: 'none' }}
            src={`https://source.unsplash.com/random`}
            alt="background"
          />
        }
          <div className={classes.overlay} />
          <Grid container>
            <Grid container item md={12} style={{marginTop: '285px'}} justify="center">
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  [Your Name/ Title]
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  [SubTitle]
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
}

export default Home;