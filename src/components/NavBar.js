import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const NavBar = () => {
   return (
      <div>
         <AppBar position="static">
            <Toolbar sx={{background: "#333"}}>
               React & Material-UI 5 Sample Application
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default NavBar;
