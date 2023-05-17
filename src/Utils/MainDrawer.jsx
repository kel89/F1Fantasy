import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsIcon from '@mui/icons-material/Settings';

import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function MainDrawer({open, setOpen}) {

	const { signOut, user } = useAuthenticator((context) => [context.signOut, context.user]);
	const navigate = useNavigate();

    // Determine user groups
    let userGroups = user.signInUserSession.idToken.payload['cognito:groups'];
    let isAdmin = (userGroups != undefined) && userGroups.includes("admin");
  
	const toggleDrawer = (open) => (event) => {
	if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
	  return;
	}

	setOpen(!open);
  };

  const list = (anchor) => (
	<Box
	  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
	  role="presentation"
	  onClick={toggleDrawer(anchor, false)}
	  onKeyDown={toggleDrawer(anchor, false)}
	>
	  <List>
		<ListItem disablePadding>
			<ListItemButton onClick={() => navigate('/')}>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary={'Home'} />
			</ListItemButton>
		</ListItem>

        <ListItem disablePadding>
			<ListItemButton onClick={() => navigate('/about')}>
				<ListItemIcon>
					<HelpIcon />
				</ListItemIcon>
				<ListItemText primary={'How To Play'} />
			</ListItemButton>
		</ListItem>

        <ListItem disablePadding>
			<ListItemButton onClick={() => navigate('/settings')}>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary={'Settings'} />
			</ListItemButton>
		</ListItem>
		{/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
		  <ListItem key={text} disablePadding>
			<ListItemButton>
			  <ListItemIcon>
				{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
			  </ListItemIcon>
			  <ListItemText primary={text} />
			</ListItemButton>
		  </ListItem>
		))} */}
	  </List>
	  <Divider />
	  <List>
        {
            isAdmin ? (
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate("/admin")}>
                        <ListItemIcon>
                            <SettingsSuggestIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Admin'} />
                    </ListItemButton>
                </ListItem>
            ) : null
        }
		<ListItem disablePadding>
			<ListItemButton onClick={signOut}>
				<ListItemIcon>
					<ExitToAppIcon />
				</ListItemIcon>
				<ListItemText primary={'Sign Out'} />
			</ListItemButton>
		</ListItem>

		{/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
		  <ListItem key={text} disablePadding>
			<ListItemButton>
			  <ListItemIcon>
				{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
			  </ListItemIcon>
			  <ListItemText primary={text} />
			</ListItemButton>
		  </ListItem>
		))} */}
	  </List>
	</Box>
  );

  return (
	<Drawer
		anchor={'left'}
		open={open}
		onClose={() => setOpen(false)}
		>
		{list('left')}
		</Drawer>
  );
}