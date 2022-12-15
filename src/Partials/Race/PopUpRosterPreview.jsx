import {forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import RosterPreview from './RosterPreview';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function PopUpRosterPreview({rosterId, rosterOwner, open, setOpen}){

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            fullWidth={true}
            maxWidth={'xs'}
            onClose={() => setOpen(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>
                {rosterOwner}
            </DialogTitle>
            <DialogContent>
            {/* <DialogContentText id="alert-dialog-slide-description"> */}
                <RosterPreview 
                    id={rosterId}
                    toggler={rosterId}
                    />
            {/* </DialogContentText> */}
            </DialogContent>
        </Dialog>
    )
}