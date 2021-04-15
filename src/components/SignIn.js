import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom"
import clsx from 'clsx';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'

import DialogHelp from "./DialogHelp";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#3333ff",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(1, 0, 1),
    },
    textAlignCenter: {
        textAlign: "center",
    },
    textAlignRight: {
        textAlign: "right",
    }
}));

const SignIn = () => {

    const classes = useStyles();

    const [form, setForm] = useState({
        "id": '',
        "pwd": '',
        "acknowledge": false
    });
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleFieldUpdate = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleCheckUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    // Open and close dialog
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToVoteIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Voter Portal Login
                </Typography>
                <form className={classes.form} noValidate>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    required
                                    id="id"
                                    label="Issued ID"
                                    name="id"
                                    value={form.id}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    required
                                    id="pwd"
                                    label="Issued Passcode"
                                    name="pwd"
                                    value={form.pwd}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" id="acknowledge" name="acknowledge" checked={form.acknowledge} onChange={handleCheckUpdate} />}
                                    label="I certify the provided information is my own and understand this system is for authorized use. "
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <div className="g-recaptcha" data-sitekey="6LesPaoaAAAAALo9omhPT07Ry6MrLHg_MuP9D1WA"></div>
                            </Grid>
                            
                            <Grid item xs={12} >
                                <RouterLink to="/vote/1">
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign In
                                    </Button>
                                </RouterLink>
                            </Grid>

                            <Grid item xs={6}>
                                <a href="#" variant="body2" onClick={handleClickOpen}>
                                    Need help?
                                </a>
                            </Grid>
                            <Grid item xs={6} className={classes.textAlignRight}>
                                <RouterLink to="/register" variant="body2">
                                    Register To Vote
                                </RouterLink>
                            </Grid>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </form>

                <DialogHelp open={openDialog} handleClose={handleClose}></DialogHelp>

            </div>
            <Box mt={8} className={classes.textAlignCenter}>
                <p>Copyright 2021 AC Voting Group. This system is not affiliated with the United States Government or any legal system.</p>
            </Box>
        </Container>
    );
}

export default SignIn;