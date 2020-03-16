import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid container item spacing={0} justify="center">
                <Typography variant="h6" gutterBottom align="center">
                    About Me
                </Typography>
            </Grid>
            <Grid container item spacing={0} justify="center">
                <Grid item xs={12} md={6} lg={10} xl={10}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                    <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </Typography>
                </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}