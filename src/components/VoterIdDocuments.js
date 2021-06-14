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
    }
}));

const VoterIdDocuments = () => {

    const classes = useStyles();

    const [form, setForm] = useState({

    });

    const handleCheckUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const handleGroupCheckUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }


    return(
        <Container>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Voter Identification Confirmation
                </Typography>
                <form className={classes.form} noValidate>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container spacing={2}>
                            <section>
                                On this page you will be required to confirm that you are eligible to vote and to present eligible Alabama voter identification.
                            </section>
                        </Grid>
                        <Grid container spacing={2}>
                            <section>
                                In order to be eligible to vote in the state of Alabama, you certify that you are:
                            </section>
                            <ul>
                                <li>A U.S Citizen</li>
                                <li>A resident of Alabama</li>
                            </ul>

                        </Grid>
                    </MuiPickersUtilsProvider>
                </form>
            </div>
        </Container>
    );

}

export default VoterIdDocuments;