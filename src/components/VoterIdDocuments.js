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
                        <Grid>
                            <section>
                                In order to properly identify yourself. Please upload a photo of a valid form of ID. A valid form of ID can be one of the following:
                            </section>
                            <ul>
                                <li>Valid Alabama Driver’s License (not expired or has been expired less than 60 days)</li>
                                <li>Alabama Law Enforcement Agency Digital Driver’s License</li>
                                <li>Valid Alabama Nondriver ID (not expired or has been expired less than 60 days)</li>
                                <li>Alabama Law Enforcement Agency Digital Nondriver ID</li>
                                <li>Valid Alabama Photo Voter ID Card</li>
                                <li>Valid State-Issued ID (Alabama or any other state)</li>
                                <li>Valid Federal-Issued ID</li>
                                <li>Valid US passport</li>
                                <li>Valid Employee ID from Federal Government, State of Alabama, County, Municipality, Board, or other entity of this state</li>
                                <li>Valid student or employee ID from a public or private college or university in the State of Alabama (including postgraduate technical or professional schools)</li>
                                <li>Valid student or employee ID issued by a state institution of higher learning in any other state</li>
                                <li>Valid Military ID</li>
                                <li>Valid Tribal ID</li>
                            </ul>
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </form>
            </div>
        </Container>
    );

}

export default VoterIdDocuments;