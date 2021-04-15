import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {
    CssBaseline,
    Paper,
    Typography,
    Box,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardHeader,
    Button
} from "@material-ui/core";
import clsx from "clsx";
import DialogConfirmVote from "./DialogConfirmVote";
import DialogHelp from "./DialogHelp";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: '256px'
    },
    selected: {
        border: 'tomato 4px solid'
    }
}));

const candidates = {
    WASHINGTON: "George Washington",
    ADAMS: "John Adams",
    CLINTON: "George Clinton"
}

const VoterForm = ({}) => {

    const [expireTime, setExpiretime] = useState(new Date("April 15, 2021 21:00:00"))
    const [selection, setSelection] = useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const classes = useStyles();

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
        <Box pt={8} pb={10}>
            <Container maxWidth="sm">
                <Box textAlign="center" mb={5}>
                    <Typography variant="h4" component="h2" gutterBottom={true}>Vote Here</Typography>
                    <Typography variant="subtitle1" color="textSecondary">You have been successfully authenticated. Please select your candidate by the closing election time.</Typography>
                </Box>
            </Container>
            <Container maxWidth="md">
                <Box textAlign="center">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant="outlined" className={selection == candidates.WASHINGTON && classes.selected}>
                                <CardActionArea name={candidates.WASHINGTON} onClick={() => {handleSelection(candidates.WASHINGTON)}}>
                                    <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1585076800588-77e0884c3191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80" />
                                    <CardHeader title="George Washington" subheader="Federalist" titleTypographyProps={{gutterBottom: true}}/>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant="outlined" className={selection == candidates.ADAMS && classes.selected}>
                                <CardActionArea name={candidates.ADAMS} onClick={() => {handleSelection(candidates.ADAMS)}}>
                                    <CardMedia className={clsx(classes.media, selection == "John Adams")} image="https://images.unsplash.com/photo-1585076800172-98875d666c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format" />
                                    <CardHeader title="John Adams" subheader="Fedarlist" titleTypographyProps={{gutterBottom: true}} />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant="outlined" className={selection == candidates.CLINTON && classes.selected}>
                                <CardActionArea name={candidates.CLINTON} onClick={() => {handleSelection(candidates.CLINTON)}}>
                                    <CardMedia className={classes.media} image="https://upload.wikimedia.org/wikipedia/commons/f/f9/George_Clinton_by_Ezra_Ames_%28full_portrait%29.jpg" />
                                    <CardHeader title="George Clinton" subheader="Anti-Fedarlist" titleTypographyProps={{gutterBottom: true}} />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleClickOpen}
                            >
                                Review & Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <DialogConfirmVote open={openDialog} handleClose={handleClose} selection={selection}></DialogConfirmVote>
                </Box>
            </Container>
        </Box>
    )
}

export default VoterForm;