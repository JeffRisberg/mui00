import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        React & Material-UI Sample Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
