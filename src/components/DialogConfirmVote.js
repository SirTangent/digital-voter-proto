import React from "react";
import {Link} from "react-router-dom";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {Dialog, Typography} from "@material-ui/core";

const DialogConfirmVote = ({open, handleClose, selection}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"sm"}
        >
            <DialogTitle id="alert-dialog-title">{"Please confirm your vote!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You have voted for the following candidate:
                    <p></p>
                    <Typography color={"primary"}>Candidate: <u>{selection || "N/A"}</u></Typography>
                    <p></p>
                    Once you cast your ballot, you <b>cannot re-submit.</b>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to="/ballot-submission">
                    <Button color="primary">
                        Cast Ballot
                    </Button>
                </Link>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogConfirmVote;