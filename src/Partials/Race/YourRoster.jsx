import { useAuthenticator } from '@aws-amplify/ui-react';
import RosterPreview from './RosterPreview';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

/**
 * Helper component to render the logic for showing a user's roster, setting their
 * roster, editing their roster, and indicating if the time has passed after which point
 * they can no longer edit/set their roster.
 * 
 * Cases to consider:
 * - Before Race
 *  + User has no roster
 *      --> show button to create roster
 *  + User has a roster
 *      --> Show Button to edit roster
 *      --> Preview Roster
 * - After Race
 *      --> Show Preview of Roster
 *      X no button to edit/create roster if one does not exist
 */
export default function YourRoster({raceData, rosterData, setOpenSetRoster, setRosterId, refreshState}){
    const { user } = useAuthenticator(c => [c.user]);

    let now = new Date();
    let raceDate = new Date(raceData.date);

    // List of all rosters for the race
    let rosters = raceData.rosters?.items;

    // Before Race --------------------------------
    if (now < raceDate){
        // No rosters, or this user does not have one
        console.log(rosters);
        if (!rosters || rosters.find(roster => roster.user.id === user.username) === undefined){
            // Show button to set roster
            return (
                <div className='p-4 bg-white border shadow-lg'>
                    <h1 className='font-racing text-xl text-gray-800 mb-2'>
                        Your Roster
                    </h1>
                    <button
                        className='btn w-full text-center py-2 border-2 rounded-lg border-dashed border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                        onClick={() => setOpenSetRoster(true)}>
                        Set Your Roster!
                    </button>
                </div>
            )
        } else {
            // There is a roster, so show edit button and roster preview
            let userRoster = rosters.find(x => x.user.id == user.username);
            return (
                <div className='p-4 bg-white border shadow-lg'>
                    <div className='flex justify-between mb-2'>
                        <h1 className='font-racing text-xl text-gray-800'>
                            Your Roster
                        </h1>
                        <div>
                            <IconButton onClick={() => {setRosterId(userRoster.id); setOpenSetRoster(true);}}>
                                <EditIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* <button
                        onClick={() => {setRosterId(userRoster.id); setOpenSetRoster(true);}}
                        className='btn w-full py-2 mb-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white'>
                        Edit Roster
                    </button> */}
                    <RosterPreview id={userRoster.id} toggler={refreshState}/>
                </div>
            )
        }
    }
    // After Race ---------------------------------
    else {
        // User Has no roster, so just say fuck you
        if (rosters.length == 0 || rosters.find(x => x.user.id == user.username) == undefined){
            return (
                <div className='p-4 bg-white border text-xl font-racing text-gray-500 shadow-lg'>
                    You never set a roster!
                </div>
            )
        }
        // User has a roster, show show the preview
        else {
            let userRoster = rosters.find(x => x.user.id == user.username);
            return (
                <div className='p-4 bg-white border shadow-lg'>
                    <div className='p-2 text-gray-600 text-xl font-racing'>
                        Your roster has been locked in!
                    </div>
                    <RosterPreview id={userRoster.id} toggler={refreshState} />
                </div>
            );
        }
    }


}
