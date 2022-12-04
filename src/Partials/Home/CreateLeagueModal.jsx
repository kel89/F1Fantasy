import { forwardRef, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { API } from "aws-amplify";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function CreateLeagueModal({ open, setOpen, refreshUser }) {
    const {user} = useAuthenticator(context => [context.user]);
    const [name, setName] = useState('');

	const handleClose = () => {
		setOpen(false);
	};

	const createLeague = async () => {
		console.log("Create League");
        
		// Create the Leauge with current user as owner
        let qs = String(`
        mutation CreateLeague {
            createLeague(input: {leagueOwnerId: "${user.username}", name: "${name}"}) {
              id
            }
          }
        `);
        let resp = await API.graphql({query: qs});
        console.log(resp);
        let newId = resp.data.createLeague.id;
        console.log(newId);
        // Add the leage to the current user's list
        let qs2 = String(`
        mutation CreateUserLeagues {
            createUserLeagues(input: {leagueId: "${newId}", userId: "${user.username}"}) {
                id
            }
          }
        `);
        let resp2 = await API.graphql({query:qs2});
        refreshUser();
        setOpen(false);
	};

    const updateName = (e) => {
        setName(e.target.value);
    }

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description">
				<DialogTitle>{"Create League"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Create a new league of which you will be the owner
					</DialogContentText>
					<TextField
						autoFocus
                        value={name}
                        onChange={updateName}
						margin="dense"
						id="name"
						label="League Name"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={createLeague}>Create</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
