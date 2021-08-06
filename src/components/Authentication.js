import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom"
import clsx from 'clsx';

import DialogConfirmVote from "./DialogConfirmVote";
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
import {Check} from "@material-ui/icons";

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
    continue: {
        margin: theme.spacing(1, 0, 1),
    },
    textAlignCenter: {
        textAlign: "center",
    },
    textAlignRight: {
        textAlign: "right",
    },
    media: {
        height: '256px'
    },
    selected: {
        border: 'tomato 4px solid'
    },
    m2: {
        margin: '16px'
    }
}));

const Authentication = () => {

    const [expireTime, setExpiretime] = useState(new Date("April 15, 2021 21:00:00"))
    const [selection, setSelection] = useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const classes = useStyles();

    const [form, setForm] = useState({
        passcode: undefined
    });

    const handleFieldUpdate = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSelection = (val) => {
        setSelection(val);
    }

    // Open and close dialog
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Container>
            <div align={"center"}>
                <Typography component="h1" variant="h5">
                    2-Step Authentication
                </Typography>
            </div>
            <section>Please enter verification code sent to your earlier selection</section>
            <form className={classes.form} noValidate>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={2}>
                        <TextField
                            variant="outlined"
                            required
                            label="Passcode"
                            name="passcode"
                            value={form.passcode}
                            onChange={handleFieldUpdate}
                            maxWidth='sm'
                            autoFocus
                        />
                        <Grid item xs={12} >
                            <RouterLink to="/pre-ballot">
                                <Button
                                    maxWidth='xl'
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Authenticate
                                </Button>
                            </RouterLink>
                        </Grid>
                        <Grid item xs={12}>
                            <RouterLink to="/" variant="body2">
                                Go Back
                            </RouterLink>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </form>
        </Container>
    );
}

export default Authentication;