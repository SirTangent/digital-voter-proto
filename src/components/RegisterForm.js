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

const RegisterForm = () => {

    const classes = useStyles();

    const [form, setForm] = useState({
        "name": '',
        "dob": Date.now(),
        "id": '',
        "acknowledge": false,
        "legalName" : ''
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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <HowToVoteIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    *state* Voter Register
                </Typography>
                <form className={classes.form} noValidate>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container spacing={2}>
                            <Grid item xs ={12}>
                                <section>1) Are you a citizen of the United States of America?</section>
                                <FormControlLabel
                                    control={<Checkbox value="citizen"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="citizen"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="No"
                                />
                            </Grid>
                            <Grid item xs ={12}>
                                <section>2) Will you be 18 years of age on or before election day?</section>
                                <FormControlLabel
                                    control={<Checkbox value="over eighteen"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="over eighteen"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="No"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>3) Enter name</section>
                                <TextField
                                    variant="standard"
                                    required
                                    id="name"
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
                            <Grid item xs={12}>
                                <section>4) Enter Maiden Name / Former Name (if reporting a change of name)</section>
                                <TextField
                                    variant="standard"
                                    required
                                    id="name"
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
                                    id="dob"
                                    name="dob"
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
                                    required
                                    id="id"
                                    name="id"
                                    value={form.id}
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
                                    id="id"
                                    name="id"
                                    value={form.id}
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
                                    id="id"
                                    name="id"
                                    value={form.id}
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
                                    id="id"
                                    name="id"
                                    value={form.id}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                    className={clsx(classes.margin, classes.textField)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="citizen"
                                                       color="primary"
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
                                    id="address"
                                    label="Home Address"
                                    name="address"
                                    value={form.address}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="city"
                                    label="City"
                                    name="city"
                                    value={form.city}
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
                                    name="state"
                                    value={form.state}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="zip"
                                    label="ZIP Code"
                                    name="zip"
                                    value={form.zip}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>9) Sex (choose one)</section>
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Female"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>10) Race (Choose one)</section>
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="White"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Asian"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Hispanic"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Black"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Pacific Islander"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="address"
                                                       color="primary"
                                                       name="acknowledge"
                                                       checked={form.acknowledge}
                                                       onChange={handleCheckUpdate} />}
                                    label="Other"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section>11) Place of Birth</section>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="address"
                                    label="Home Address"
                                    name="address"
                                    value={form.address}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="city"
                                    label="City"
                                    name="city"
                                    value={form.city}
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
                                    name="state"
                                    value={form.state}
                                    onChange={handleFieldUpdate}
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="zip"
                                    label="ZIP Code"
                                    name="zip"
                                    value={form.zip}
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
                                    id="dob"
                                    name="dob"
                                    label="Today's Date"
                                    value={form.dob}
                                    onChange={handleDateUpdate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    fullWidth
                                    autoFocus
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
                                        Submit Application
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

                <DialogHelp open={openDialog} handleClose={handleClose}></DialogHelp>

            </div>
            <Box mt={8} className={classes.textAlignCenter}>
                <p>Copyright 2021 AC Voting Group. This system is not affiliated with the United States Government or any legal system.</p>
            </Box>
        </Container>
    );
}

export default RegisterForm;