import React, {useState} from "react";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    centerize: {
        textAlign: "center",
    }
}));

const SignIn = () => {

    const classes = useStyles();

    const [form, setForm] = useState({
        "name": '',
        "dob": '',
        "id": '',
        "acknowledge": false
    });

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
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="name"
                                label="Full Legal Name"
                                name="name"
                                value={form.name}
                                onChange={handleFieldUpdate}
                                fullWidth
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                id="dob"
                                label="Date of Birth"
                                name="dob"
                                value={form.dob}
                                onChange={handleFieldUpdate}
                                fullWidth
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                id="id"
                                label="WIT ID"
                                name="id"
                                value={form.id}
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
                        <Grid item xs={12} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In / Register to Vote
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link href="#" variant="body2">
                                Need help?
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
            <Box mt={8} className={classes.centerize}>
                <p>Copyright 2021 AC Voting Group. This system is not affiliated with the United States Government or any legal system.</p>
            </Box>
        </Container>
    );
}

export default SignIn;