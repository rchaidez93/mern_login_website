import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FullScreenDialog from '../components/FullScreenDialog';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 400,
    },
  });
  
  const portfolio = [
      {
          id: 0,
          title: 'HeadShot',
          image: `https://source.unsplash.com/random`,
          content: 'HeadShots',
      },
      {
          id: 1,
          title: 'Bridal',
          image: `https://source.unsplash.com/random`,
          content: 'Bridal',
      },
      {
          id: 2,
          title: 'High Fashion',
          image: `https://source.unsplash.com/random`,
          content: 'High Fashion',
      }
  ];

export default function Portfolio() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [images, setImages] = useState([]);

    const handleClickOpen = (type) => {
        let image_type= "";
        setType(type);
        setOpen(true);
        if(type == 0){
            image_type = "headShot";
        }
        else if(type == 1){
            image_type = "bridal";
        }
        else{
            image_type = "highFashion";
        }
        
      };
    
      const handleClose = () => {
        setType(null);
        setOpen(false);
      };
    
    return(
        <>
            <Grid container spacing={4}>
                <Grid container item spacing={0} justify="center">
                    <Typography variant="h6" gutterBottom align="center">
                        Portfolio
                    </Typography>
                </Grid>
                <Divider />
                    <Grid container item spacing={8} justify="center">
                        {portfolio.map(post => (
                        <Grid item key={post.id+1} xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={post.image}
                                    title={post.title}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        {post.content}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleClickOpen(post.id)}>
                                    View
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>       
                        ))}
                    </Grid>
            </Grid>
            <FullScreenDialog open={open} onDialogClose={handleClose} type={type} images={images} />
        </>
    );
};