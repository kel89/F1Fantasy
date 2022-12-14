import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import LeaderboardCard from './LeaderboardCard';
import ReactLoading from 'react-loading';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LeaderBoard({}){
    const [usersData, setUsersData] = useState();
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let qs = String(`
        query ListUsers {
            listUsers {
                items {
                    nickname
                    id
                    given_name
                    total_points
                }
            }
        }
        `);
        let resp = await API.graphql({query: qs});
        // console.log(resp);
        setUsersData(resp.data.listUsers.items);
    }

    // return (
    //     <div className='w-full p-4 border border-gray-300 rounded-lg shadow-lg bg-white'>
    //         <h1 className='text-xl text-gray-600 mb-2'>
    //             Leaderboard
    //         </h1>
            // {
            //     usersData == undefined ? (
            //         <ReactLoading type='balls' color='red' />
            //     ) : (
            //     <div className='flex flex-col gap-2'>
            //         {usersData.map((u, i) => {
            //             return <LeaderboardCard data={u} key={i} />
            //         })}
            //     </div>
            //     )
            //     }
    //     </div>
    // )

    return (
        <Accordion 
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                id="raceListAccordion">
                <Typography>
                    Leaderboard
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    usersData == undefined ? (
                        <ReactLoading type='balls' color='red' />
                    ) : (
                    <div className='flex flex-col gap-2'>
                        {usersData.sort((a,b) => b.total_points - a.total_points).map((u, i) => {
                            return <LeaderboardCard data={u} key={i} />
                        })}
                    </div>
                    )
                }
            </AccordionDetails>
        </Accordion>
    )
}