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

    const getDriverImage = (abbreviation) => {
        try {
            return (
                <img 
                    className='inline-block h-16 w-16'
                    src={require(`../../assets/drivers/${abbreviation.toLowerCase()}.png`)} 
                    alt={''} />
            )
        } catch {
            return null
        }
    }

    return (
        <div className='flex flex-col w-full gap-1'>
                {
                    rosterData.driver_order.slice(0, 10).map((d, i) => {
                        let abbrev = d.split("-")[0];
                        let driver = driverData.find(x => x.driver.abbreviation == abbrev);
                        driver = driver.driver;
                        return (

                        <div key={i} className='flex gap-8 items-center border-t border-gray-200 transition duration-300 ease-in-out hover:bg-red-100'>
                            <div className='font-bold text-gray-800 text-xl'>
                                {i+1}
                            </div>
                            {/* <img 
                                className='h-16 w-16'
                                src={require(`../../assets/drivers/${driver.abbreviation.toLowerCase()}.png`)} 
                                alt={''} /> */}
                                {getDriverImage(driver.abbreviation)}
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