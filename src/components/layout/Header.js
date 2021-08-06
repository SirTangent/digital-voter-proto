import React from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";

const Header = (props) => (
    <AppBar>
        <Toolbar>{props.msg}</Toolbar>
        {
            //props.show ? <Button variant={"success"}>dwadfwa</Button> : null
        }

    </AppBar>
);

export default Header;