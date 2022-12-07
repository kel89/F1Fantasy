import { List, ListItem, ListItemText } from '@mui/material';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function RosterPreview({id, toggler}){
    const [rosterData, setRosterData] = useState();
    const [driverData, setDriverData] = useState();

    useEffect(() => {
        // console.log("Updating");
        getData();
    }, []);

    useEffect(() => {
        setTimeout(getData, 500);
    }, [toggler])

    const getData = async () => {
        let qs = String(`
        query GetRoster {
            getRoster(id: "${id}"){
                breakdown
                driver_order
                total_points
                updatedAt
                user {
                    nickname
                    given_name
                    family_name
                }
                race {
                    name
                    city
                    country
                    drivers {
                        items {
                            driver {
                                first_name
                                last_name
                                abbreviation
                                team
                                number
                            }
                        }
                    }
                }
            }
        }
        `);
        let resp = await API.graphql({query: qs});
        setRosterData(resp.data.getRoster);
        setDriverData(resp.data.getRoster.race.drivers.items);
    }

    if (rosterData == undefined || driverData == undefined){
        return <ReactLoading type='bars' color='red' />
    }

    return (
        <div className='flex flex-col w-full gap-1'>
                {
                    rosterData.driver_order.map((d, i) => {
                        let abbrev = d.split("-")[0];
                        let driver = driverData.find(x => x.driver.abbreviation == abbrev);
                        driver = driver.driver;
                        return (
                        //    <ListItem>
                        //         <ListItemText
                        //             primary={i+1} />
                        //         <ListItemText
                        //             primary={`${driver.first_name} ${driver.last_name}`}
                        //             secondary={driver.team}
                        //             />
                        //    </ListItem>
                        <div key={i} className='flex border-t border-gray-200'>
                            <div className='font-bold text-gray-800 text-xl inline-block align-middle'>
                                {i+1}
                            </div>
                            <div className='ml-4 flex flex-col'>
                                <div className='text-lg text-gray-800'>
                                    {driver.first_name} {driver.last_name}
                                </div>
                                <div className='text-gray-500'>
                                    {driver.team}
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
        </div>
    )
    
}