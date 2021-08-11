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

import registerSchema, {races, sexes} from '../firebase/schema/Registration'
import {postRegistrationForm} from "../firebase/registration";

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

const RegisterForm = ({district = ""}) => {

    const classes = useStyles();

    const [form, setForm] = useState({
        "name": '',
        "dob": null,
        "stateID": '',
        "acknowledge": false,
        "legalName" : '',
        "race" : null,
        "sex" : null,
        "citizen" : null,
        "ofLegalAge" : null,
        "firstName" : null,
        "lastName" : null,
        "middleName" : null,
        "suffix" : null,
        "telephone" : null,
        "email" : null,
        "ssn" : null,
        residentialAddress: undefined,
        residentialCity: undefined,
        residentialState: undefined,
        residentialZip: undefined,
        todaysDate: undefined,
        birthZip: undefined,
        birthState: undefined,
        birthCity: undefined,
        birthAddress: undefined
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

    const handleGroupCheckUpdate = (e) => {
        console.log(e.target.name)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleDateUpdate = (e) => {
        setForm({
            ...form,
            dob: e
        });
    }

    // Open and close dialog
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    //TODO: Data validation
    //TODO: Partial performance deterioration

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToVoteIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {district} Voter Register
                </Typography>
                <form className={classes.form} noValidate>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container spacing={2}>
                            <Grid item xs ={12}>
                                <section>1) Are you a citizen of the United States of America?</section>
                                <FormControlLabel
                                    control={<Checkbox value={true}
                                                       color="primary"
                                                       name="citizen"
                                                       checked={form.citizen}
                                                       onChange={handleGroupCheckUpdate} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="No"
                                                       color="primary"
                                                       name="citizen"
                                                       checked={form.citizen == "No"}
                                                       onChange={handleGroupCheckUpdate} />}
                                    label="No"
                                />
                            </Grid>
                            <Grid item xs ={12}>
                                <section>2) Will you be 18 years of age on or before election day?</section>
                                <FormControlLabel
                                    control={<Checkbox value="Yes"
                                                       color="primary"
                                                       name="ofLegalAge"
                                                       checked={form.ofLegalAge == "Yes"}
                                                       onChange={handleGroupCheckUpdate} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="No"
                                                       color="primary"
                                                       name="ofLegalAge"
                                                       checked={form.ofLegalAge == "No"}
                                                       onChange={handleGroupCheckUpdate} />}
                                    label="No"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>3) Enter name</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="First"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    label="Middle"
                                    name="middleName"
                                    value={form.middleName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    required
                                    label="Last"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    required
                                    label="Suffix"
                                    name="suffix"
                                    value={form.suffix}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>4) Enter Maiden Name / Former Name (if reporting a change of name)</section>
                                <TextField
                                    variant="standard"
                                    required
                                    label="First"
                                    name="name"
                                    value={form.legalName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="standard"
                                    id="name"
                                    label="Middle"
                                    name="name"
                                    value={form.legalName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="standard"
                                    required
                                    id="name"
                                    label="Last"
                                    name="name"
                                    value={form.legalName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    variant="standard"
                                    required
                                    id="name"
                                    label="Suffix"
                                    name="name"
                                    value={form.legalName}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <section>5) Date of Birth</section>
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    value={form.dob}
                                    onChange={handleDateUpdate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <section>State ID #</section>
                                <TextField
                                    variant="outlined"
                                    name="stateID"
                                    value={form.stateID}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                    className={clsx(classes.margin, classes.textField)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <section>6) Primary Telephone</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    name="telephone"
                                    value={form.telephone}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                    className={clsx(classes.margin, classes.textField)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <section>7) Email Address</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    name="email"
                                    value={form.email}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                    className={clsx(classes.margin, classes.textField)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <section>Last four of Social Security #"</section>
                                <TextField
                                    variant="outlined"
                                    name="ssn"
                                    value={form.ssn}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                    className={clsx(classes.margin, classes.textField)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="I do not have an Alabama driver's license or Alabama non-driver ID or a Social Security number."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>8) Addresses</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    name="residentialAddress"
                                    label="Home Address (include apartment or other unit number  if applicable)"
                                    name="address"
                                    value={form.residentialAddress}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="City"
                                    name="residentialCity"
                                    value={form.residentialCity}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="State"
                                    name="residentialState"
                                    value={form.residentialState}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="Zip Code"
                                    name="residentialZip"
                                    value={form.residentialZip}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>9) Sex (choose one)</section>
                                {
                                    sexes.map((sex, idx) => (
                                        <FormControlLabel
                                            control={<Checkbox value={sex}
                                                               color="primary"
                                                               name="sex"
                                                               checked={form.sex == sex}
                                                               onChange={handleGroupCheckUpdate} />}
                                            label={sex}
                                        />
                                    ))
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <section>10) Race (Choose one)</section>

                                {
                                    races.map((race, idx) => (
                                        <FormControlLabel key={idx}
                                            control={<Checkbox value={race}
                                                               color="primary"
                                                               name="race"
                                                               checked={form.race == race}
                                                               onChange={handleGroupCheckUpdate} />}
                                            label={race}
                                        />
                                    ))
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <section>11) Place of Birth</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="Address"
                                    name="birthAddress"
                                    value={form.birthAddress}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="City"
                                    name="birthCity"
                                    value={form.birthCity}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="state"
                                    label="State"
                                    name="birthState"
                                    value={form.birthState}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    label="Zip Code"
                                    name="birthZip"
                                    value={form.birthZip}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControlLabel
                                    control={<Checkbox value="authorize"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="I certify the provided information is my own and understand this system is for authorized use. "
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    required
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    name="todaysDate"
                                    label="Today's Date"
                                    value={form.todaysDate}
                                    onChange={handleDateUpdate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid>
                                <section>If you falsely sign this statement you can be convicted and imprisoned for up to five years. The decision to register to vote is yours. if you decide to register to vote , the office at which you are submitting this application will remain confidential and will be used only for registration purposes. If you decline to register to vote, your decision will remain confidential and will be sued only for voter registration purposes.</section>
                            </Grid>

                            <Grid item xs={12}>
                                <div className="g-recaptcha" data-sitekey="6LesPaoaAAAAALo9omhPT07Ry6MrLHg_MuP9D1WA"></div>
                            </Grid>
                            
                            <Grid item xs={12} >
                                <RouterLink to="#">
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.continue}
                                        onClick={() => {postRegistrationForm(form, (data) => {console.log(data)})}}
                                    >
                                        Continue Application
                                    </Button>
                                </RouterLink>
                            </Grid>

                            <Grid item xs={12}>
                                <RouterLink to="/register" variant="body2">
                                    Go Back
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

export default RegisterForm;