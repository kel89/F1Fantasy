import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import Layout from "../Utils/Layout";
import ReactLoading from 'react-loading';
import SetRosterDialog from '../Partials/Home/SetRosterDialog';


export default function Race({}){
    const [raceData, setRaceData] = useState();
    const [openSetRoster, setOpenSetRoster] = useState(false);
    const { user } = useAuthenticator(context => [context.user]);
    const {id} = useParams();


    useEffect(() => {
        getRaceData();
    }, [])

    const getRaceData = async () => {
        let qs = String(`
        query MyQuery {
            getRace(id: "${id}") {
              city
              country
              date
              id
              name
              rosters {
                items {
                  id
                  total_points
                  user {
                    nickname
                    given_name
                  }
                }
              }
            }
          }
        `);
        let resp = await API.graphql({query:qs});
        console.log(resp);
        setRaceData(resp.data.getRace);
    }

    /**
     * Decides if should show a button to create your roster, 
     * or, if you already have one, lets show that
     */
    const renderYourRoster = () => {
        const setButton = (
            <button 
                onClick={() => setOpenSetRoster(true)}
                className='btn w-full text-center py-2 border-2 rounded-lg border-dashed border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>
                Set Your Roster!
            </button>
        );
        // No rosters at all, so show button
        if (raceData.rosters.items.length == 0){
            return setButton;
        }

        // Rosters, but not one for this user, show button


        // This use has a roster, so show the preview
    }

    return (
        <>
            <Layout pageName={raceData == undefined ? "Race" : raceData.city}>
                <div className='p-6 bg-gray-100'>
                    { raceData == undefined ? <ReactLoading type='balls' color='red' /> : (
                        <>
                            <div className='mb-2'>
                                <div className='text-2xl font-bold'>
                                    {raceData.name}
                                </div>
                                <div>
                                    {raceData.city}, {raceData.country}
                                </div>
                                <div>
                                    {(new Date(raceData.date)).toLocaleDateString()}
                                </div>
                            </div>
                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    {renderYourRoster()}
                                </div>
                                <div>
                                    Everyone Else with a Roster
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Layout>
            <SetRosterDialog 
                open={openSetRoster} 
                setOpen={setOpenSetRoster}
                />
        </>
    )
}