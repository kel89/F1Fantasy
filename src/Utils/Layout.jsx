import { useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import MainDrawer from './MainDrawer';
import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Render Heading and Drawer for any page to use
 * @param {*} param0 
 * @returns 
 */
export default function Layout({children, pageName}){
    const { signOut } = useAuthenticator((context) => [context.signOut]);
    const naviage = useNavigate();
    const [open, setOpen] = useState(false);


    return (
        <>

            <MainDrawer open={open} setOpen={setOpen}/>
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static' sx={{backgroundColor: 'red'}}>
                    <Toolbar>
                        <IconButton
                            onClick={() => setOpen(true)}
                            size='large'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{mr:2}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variage='h6' component='div' sx={{flexGrow: 1}}>
                            {pageName}
                        </Typography>
                        {/* <Button 
                            onClick={signOut}
                            color='inherit'
                            edge='right'>
                            Sign Out
                        </Button> */}
                        <Button 
                            onClick={() => naviage(-1)}
                            color='inherit'
                            edge='right'>
                            Back
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {children}
        </>
    )
}