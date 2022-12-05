import { DehazeTwoTone, NestCamWiredStandTwoTone } from '@mui/icons-material';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import RaceCard from './RaceCard';

export default function RaceList({}){

    const [raceData, setRaceData] = useState();

    useEffect(() => {
        getRaceData();
    }, []);

    const getRaceData = async () => {
        let qs = String(`
        query ListRaces {
            listRaces {
                items {
                    city
                    country
                    date
                    id
                    name
                }
            }
        }
        `);
        let resp = await API.graphql({query:qs});
        setRaceData(resp.data.listRaces.items);
    }

    return (
        <>
            <div className='w-full p-4 border border-gray-300 rounded-lg shadow-lg bg-white'>
                <h1 className='text-xl text-gray-600 mb-2'>
                    Races
                </h1>
                {
                    raceData == undefined ? (
                        <ReactLoading type='balls' color='red' />
                    ) : (
                    <div className='flex flex-col gap-2'>
                        {raceData.sort( (a,b) => (new Date(a.date) - new Date(b.date))).map((race, i) => {
                            return <RaceCard data={race} key={i}/>
                        })}
                    </div>
                    )
                }
            </div>
        </>
    )
}