import Layout from "../Utils/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

export default function League({}){

    const [leagueData, setLeagueData] = useState();
    const navigate = useNavigate();
    const { user } = useAuthenticator(context => [context.user])
    const {id} = useParams();
    
    useEffect(() => {
        getLeagueData();
    }, []);


    const getLeagueData = async () => {
        let qs = String(`
        query MyQuery {
            getLeague(id: "${id}") {
              id
              leagueOwnerId
              name
              users {
                items {
                  user {
                    email
                    nickname
                    given_name
                    family_name
                    Rosters(filter: {rosterLeaugeId: {eq: "${id}"}}) {
                      nextToken
                      items {
                        id
                      }
                    }
                  }
                }
              }
            }
        }
        `);
        // console.log(qs);
        const resp = await API.graphql({query:qs});
        console.log(resp.data.getLeague);
        setLeagueData(resp.data.getLeague);
    }

    return (
        <>
            <Layout pageName={leagueData == undefined ? "League" : leagueData.name}>
                <div className='p-6'>
                    Here is the league
                    <ul className='list-disc'>
                        <li>
                            Show a list of all the users in the league, their standing, and total points
                        </li>
                        <li>
                            Have an option to click and see Someone's roster
                        </li>
                        <li>
                            Have an option to view and set your roster
                        </li>
                        <li>
                            Have an option to leave the league
                        </li>
                        <li>
                            If you are the owner of the league, have ability to delete it
                        </li>
                    </ul>
                </div>
            </Layout>
        </>
    )
}