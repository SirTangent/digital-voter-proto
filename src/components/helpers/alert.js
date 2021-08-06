import React from 'react';
import {Alert} from '@material-ui/lab'

const AlertComponent = ({severity, msg}) => (
    <Alert severity={severity}>{msg}</Alert>
);

export default AlertComponent;
