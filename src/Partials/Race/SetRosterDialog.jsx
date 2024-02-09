import { forwardRef, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import RosterEditor from "./RosterEditor";
import { useAuthenticator } from "@aws-amplify/ui-react";
// import { API } from "aws-amplify";
import { generateClient } from "@aws-amplify/api";
import { get } from "sortablejs";
import { getRoster } from "../../graphql/queries";
import { createRoster } from "../../graphql/mutations";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function SetRosterDialog({ drivers, open, setOpen, rosterId, raceId, refreshRaceData }) {

    const { user } = useAuthenticator(context => [context.user]);

    const [rosterData, setRosterData] = useState();
    const [driverOrder, setDriverOrder] = useState();

    const apiClient = generateClient();

    

    useEffect(() => {
        const getData = async () => {
            let _roster;
            if (rosterId){
                const result = await apiClient.graphql({query: getRoster, variables: {id: rosterId}});
                _roster = result.data.getRoster;
            }
            else{
                _roster = null;
            }
            setRosterData(_roster);
    
            // Define default driver order
            let _order = getDefaultOrder(drivers);
    
            if (hasValidDriverOrder(_roster)){
                setDriverOrder(_roster.driver_order.map(x => {return{id:x.split('-')[0]}}));
            } else{
                setDriverOrder(_order);
            }
        }

        if (drivers){
            getData();
        }
    }, [rosterId, drivers]);


    const getDefaultOrder = (drivers) => {
        let TEAM_ORDER = ["Mercedes", "Red Bull", "Ferrari", "McLaren", "Alpine", "Aston Martin", "Haas", "Alpha Tauri", "Williams", "Alpha Romeo"]
        let _order = drivers.sort((a,b) => {
            let t1 = TEAM_ORDER.indexOf(a.team);
            let t2 = TEAM_ORDER.indexOf(b.team);
            t1 = t1 == -1 ? 100 : t1;
            t2 = t2 == -1 ? 100 : t2;
            return t1 - t2;
        }).map((dat, i) => {return {id: dat.abbreviation}});
        return _order;
    }

    const hasValidDriverOrder = (roster) => {
        if (!roster){
            return false;
        } else if (!Object.keys(roster).includes("driver_order")){
            return false;
        } else if (!roster.driver_order){
            return false;
        }
        else if (roster.driver_order.length < drivers.length){
            return false;
        }
        else {
            return true;
        }
    }




    const parseOrder = () => {
        if (typeof(driverOrder[0]) == "object"){
            return driverOrder.map((x, i) => `${x.id}-${i+1}`);
        }
        // else, no change, so just send it
        return driverOrder.map((x,i) => `${x.id}-${i+1}`);
    }

    /**
     * Create a new roster, for this user, this race, and with 
     * the given driver order
     */
    const saveNewRoster = async () => {
        // Create a roster, assigning it to the race and user
        let newOrder = parseOrder();
        let orderString = "[" + newOrder.map(d => `"${d}"`).join(', ') + "]";
        const result = await apiClient.graphql({query: createRoster, variables:{
            input:{
                driver_order: orderString,
                total_points: 0,
                raceRostersId: raceId,
                userRostersId: user.username
            }
        }});
        console.log(result);
        let qs = String(`
        mutation CreateRoster{
            createRoster(input: {
                driver_order: ${orderString},
                total_points: 0,
                raceRostersId: "${raceId}",
                userRostersId: "${user.username}"
            }){
                id
            }
        }
        `);
        // let resp = await API.graphql({query:qs});

    }

    /**
     * Use the rosterId to update the roster, chaging only driver_order
     */
    const updateRoster = async () => {
        let newOrder = parseOrder();
        let orderString = "[" + newOrder.map(d => `"${d}"`).join(', ') + "]";
        let qs = String(`
        mutation UpdateRoster {
            updateRoster(input: {id: "${rosterId}", driver_order: ${orderString}}){
                id
                driver_order
            }
        }
        `);
        // let resp = await API.graphql({query:qs});
    }

    const save = () => {
        if (rosterId == undefined){
            saveNewRoster();
        } else{
            updateRoster();
        }

        refreshRaceData();
        setOpen(false);
    }

	return (
		<Dialog
			fullScreen
			open={open}
			onClose={() => setOpen(false)}
			TransitionComponent={Transition}>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={() => setOpen(false)}
						aria-label="close">
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
						Set Your Lineup
					</Typography>
					<Button autoFocus color="inherit" onClick={save}>
						save
					</Button>
				</Toolbar>
			</AppBar>
            {
                drivers != undefined && driverOrder != undefined ? (
                    <RosterEditor 
                        rosterData={rosterData}
                        driverData={drivers}
                        driverOrder={driverOrder}
                        setDriverOrder={setDriverOrder}
                        />
                ) : null
            }
		</Dialog>
	);
}
