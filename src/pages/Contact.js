import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Contact() {
    const classes = useStyles();

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        if(target === "name")
            setName(value);
        if(target === "email")
            setEmail(value);
        if(target === "phone")
            setPhone(value);
        if(target === "message")
            setMessage(e.target.value);
    }

    const sendContact = () => {
     
    }
 
    return(
        <>
            <Grid container spacing={4}>
                <Grid container item spacing={0} justify="center">
                    <Typography variant="h6" gutterBottom>
                    Contact
                    </Typography>
                </Grid>
                <Grid container item spacing={0} justify="center">
                    <Grid item xs={12} md={10} lg={10} xl={10}>
                        <Paper elevation={0}>
                            <Grid container item spacing={3} justify="center">
                                <Grid item xs={12} sm={10} style={{paddingLeft:'35px', paddingRight:'35px'}}>
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Your name"
                                        value={name}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                        autoComplete="name"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justify="center">
                                <Grid item xs={12} sm={5} style={{paddingLeft:'35px', paddingRight:'35px'}}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        value={email}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                        autoComplete="email1"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={5} style={{paddingLeft:'35px', paddingRight:'35px'}}>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label="Phone Number"
                                        value={phone}
                                        onChange={(e) => handleChange(e)}
                                        fullWidth
                                        autoComplete="phone number"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justify="center">
                                <Grid item xs={12} sm={10} md={10} lg={10} xl={10} style={{paddingLeft:'35px', paddingRight:'35px'}}>
                                    <TextField
                                    id="message"
                                    label="Message"
                                    multiline
                                    rowsMax="4"
                                    value={message}
                                    onChange={(e) => handleChange(e)}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justify="center">
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        className={classes.button}
                                        endIcon={<SendIcon />}
                                        onClick={sendContact}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}