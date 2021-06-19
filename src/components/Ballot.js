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

const Ballot = () => {

    const classes = useStyles();

    const [form, setForm] = useState({
        question1 : undefined,
        question2: undefined,
        question3: undefined,
        question4: undefined,
        question5: undefined,
        question6: undefined,
        question7: undefined,
        question8: undefined,
        question9: undefined,
        question10: undefined,
        question11: undefined,
        question12: undefined,
        question13: undefined,
        question14: undefined,
        question15: undefined,
        question16: undefined
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
            <div align={"center"}>
                <Typography component="h1" variant="h5">
                    Official Ballot
                </Typography>
                <Typography component="h1" variant="h5">
                    General Constitutional Amendment Election
                </Typography>
                <Typography component="h1" variant="h5">
                    Dekalb county, Alabama
                </Typography>
            </div>
            <form className={classes.form} noValidate>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container spacing={2}>
                          <Grid item xs = {12}>
                              <section>Straight Party Voting</section>
                              <FormControlLabel
                                  control={<Checkbox value="Alabama Democratic Party"
                                                     color="primary"
                                                     name="question1"
                                                     checked={form.question1 == "Alabama Democratic Party"}
                                                     onChange={handleGroupCheckUpdate} />}
                                  label="Alabama Democratic Party"
                              />
                              <FormControlLabel
                                  control={<Checkbox value="Alabama Republican Party"
                                                     color="primary"
                                                     name="question1"
                                                     checked={form.question1 == "Alabama Republican Party"}
                                                     onChange={handleGroupCheckUpdate} />}
                                  label="Alabama Republican Party"
                              />
                          </Grid>
                        <Grid item xs = {12}>
                            <section>For President and Vice-President of the United States of America (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Joseph R. Biden, Kamala D. Harris (Democratic)"
                                                   color="primary"
                                                   name="question2"
                                                   checked={form.question2 == "Joseph R. Biden, Kamala D. Harris (Democratic)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Joseph R. Biden, Kamala D. Harris (Democratic)"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Donald J. Trump, Michael R. Pence (Republican)"
                                                   color="primary"
                                                   name="question2"
                                                   checked={form.question2 == "Donald J. Trump, Michael R. Pence (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Donald J. Trump, Michael R. Pence (Republican)"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Jo Jorgenson, Jeremy Cohen (Independent)"
                                                   color="primary"
                                                   name="question2"
                                                   checked={form.question2 == "Jo Jorgenson, Jeremy  Cohen (Independent)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Jo Jorgenson, Jeremy Cohen (Independent)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section> For United States Senator</section>
                            <FormControlLabel
                                control={<Checkbox value="Doug Jones (Democratic)"
                                                   color="primary"
                                                   name="question3"
                                                   checked={form.question3 == "Doug Jones (Democrat)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Doug Jones (Democratic)"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Tommy Tuberville (Republican)"
                                                   color="primary"
                                                   name="question3"
                                                   checked={form.question3 == "Tommy Tuberville (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Tommy Tuberville (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For United States Representative, 4th Congressional District (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Rick Neighbors (Democrat)"
                                                   color="primary"
                                                   name="question4"
                                                   checked={form.question4 == "Rick Neighbors (Democrat)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Rick Neighbors (Democrat)"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Robert Aderholt (Republican)"
                                                   color="primary"
                                                   name="question4"
                                                   checked={form.question4 == "Robert Aderholt (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Robert Aderholt (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Associate Justice of the Supreme Court, Place NO. 1 (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Greg Shaw (Republican)"
                                                   color="primary"
                                                   name="question5"
                                                   checked={form.question5 == "Greg Shaw (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Greg Shaw (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Associate Justice of the Supreme Court, Place NO. 2 (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Brad Mendheim (Republican)"
                                                   color="primary"
                                                   name="question6"
                                                   checked={form.question6 == "Brad Mendheim (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Brad Mendheim (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Court of Civil Appeals Judge, Place NO. 1 (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="William C. Thompson (Republican)"
                                                   color="primary"
                                                   name="question7"
                                                   checked={form.question7 == "William C. Thompson (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="William C. Thompson (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Court of Civil Appeals Judge, Place NO. 2 (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Matt Fridy (Republican)"
                                                   color="primary"
                                                   name="question8"
                                                   checked={form.question8 == "Matt Fridy (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Matt Fridy (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Court of Criminal Appeals Judge, Place NO. 1</section>
                            <FormControlLabel
                                control={<Checkbox value="Mary Windom (Republican)"
                                                   color="primary"
                                                   name="question9"
                                                   checked={form.question9 == "Mary Windom (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Mary Windom (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Curt of Criminal Appeals Judge, Place NO. 2</section>
                            <FormControlLabel
                                control={<Checkbox value="Beth Kellem (Republican)"
                                                   color="primary"
                                                   name="question10"
                                                   checked={form.question10 == "Beth Kellem (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Beth Kellem (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For President, Public Service Commission (Vote for one)</section>
                            <FormControlLabel
                                control={<Checkbox value="Laura Casey (Democrat)"
                                                   color="primary"
                                                   name="question11"
                                                   checked={form.question11 == "Laura Casey (Democrat)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Laura Casey (Democrat)"
                            />
                            <FormControlLabel
                                control={<Checkbox value="Twinkle Andress Cavanaugh (Republican)"
                                                   color="primary"
                                                   name="question11"
                                                   checked={form.question11 == "Twinkle Andress Cavanaugh (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Twinkle Andress Cavanaugh (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For District Court Judge, Dekalb County</section>
                            <FormControlLabel
                                control={<Checkbox value="Steve Whitmore (Independant)"
                                                   color="primary"
                                                   name="question12"
                                                   checked={form.question11 == "Steve Whitmore (Independant)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Steve Whitmore (Independant)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Member, Dekalb County Commission, District NO.</section>
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Dekalb County Revenue Commissioner</section>
                            <FormControlLabel
                                control={<Checkbox value="Tyler Wilks (Independent)"
                                                   color="primary"
                                                   name="question13"
                                                   checked={form.question13 == "Tyler Wilks (Independent)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Tyler Wilks (Independent)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>for Superintendent, Dekalb County Board of Education</section>
                            <FormControlLabel
                                control={<Checkbox value="Jason Barnett (Republican)"
                                                   color="primary"
                                                   name="question14"
                                                   checked={form.question14 == "Jason Barnett (Republican)"}
                                                   onChange={handleGroupCheckUpdate} />}
                                label="Jason Barnett (Republican)"
                            />
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Member, Dekalb County board of Education, District NO. </section>
                        </Grid>
                        <Grid item xs = {12}>
                            <section>For Dekalb County Constable, District NO. </section>
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </form>


        </Container>
    );

}

export default Ballot;