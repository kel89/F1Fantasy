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
import { API } from "aws-amplify";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function SetRosterDialog({ open, setOpen, rosterId, raceId, refreshRaceData }) {

    const { user } = useAuthenticator(context => [context.user]);

    const [rosterData, setRosterData] = useState();
    const [driverData, setDriverData] = useState();
    const [driverOrder, setDriverOrder] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        // Querry for roster and driver data
        let qs = String(`
            query RosterData {
                getRoster(id: "${rosterId}"){
                    id
                    breakdown
                    driver_order
                    createdAt
                    updatedAt
                    total_points
                    raceRostersId
                    userRostersId
                }
                
                getRace(id: "${raceId}"){
                    drivers {
                        items {
                            driver {
                                abbreviation
                                first_name
                                last_name
                                id
                                number
                                team
                            }
                        }
                    }
                }
            }
        `);
        let resp = await API.graphql({query: qs});

        // extract order from roster data 
        let _drivers = resp.data.getRace.drivers.items;
        let _roster = resp.data.getRoster;

        setDriverData(_drivers);
        setRosterData(_roster);
        let _order = _drivers.map((dat, i) => {return {id: dat.driver.abbreviation}});
        // console.log(_roster);
        if (_roster == null || !Object.keys(_roster).includes("driver_order")){
            // No driver order
            setDriverOrder(_order);
        } else if (_roster.driver_order == null || _roster.driver_order.length < _drivers.length) {
            setDriverOrder(_order);
        } else {
            // Have a complete set
            setDriverOrder(_roster.driver_order.map(x => {return{id:x.split('-')[0]}}));
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
        let resp = await API.graphql({query:qs});

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
        let resp = await API.graphql({query:qs});
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
                driverData != undefined && driverOrder != undefined ? (
                    <RosterEditor 
                        rosterData={rosterData}
                        driverData={driverData}
                        driverOrder={driverOrder}
                        setDriverOrder={setDriverOrder}
                        // rosterId={rosterId}
                        />
                ) : null
            }
		</Dialog>
	);
}
