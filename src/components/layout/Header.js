import React from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';




const Header = (props) => (
    <AppBar>
        <Toolbar>
            <Typography

            >
                {props.msg}
            </Typography>
        </Toolbar>
        {
            //props.show ? <Button variant={"success"}>dwadfwa</Button> : null
        }

    </AppBar>
);


export default Header;