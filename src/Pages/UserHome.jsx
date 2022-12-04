// components/Protected.js
import { useEffect, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
import { getUser, listUsers } from '../graphql/queries'
// import MainDrawer from '../Utils/MainDrawer';
import Layout from '../Utils/Layout';
import ReactLoading from "react-loading";
import LeagueList from '../Partials/Home/LeagueList';


export function UserHome() {
	const { user} = useAuthenticator((context) => [context.route, context.user, context.signOut]);

    const [userData, setUserData] = useState();
    // signOut();
    
    /**
     * Checks to see if the user exists in the DB, if not, we create them
     */
    const checkUser = async () => {
        // Make sure we have database entry for this user
        let id = user.username;
        const qs = String(`
        query MyQuery {
            getUser(id: "${id}") {
              createdAt
              email
              family_name
              given_name
              id
              nickname
              Leagues {
                items {
                  league {
                    name
                    id
                    leagueOwnerId
                    users {
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
        let data = await API.graphql({query: qs});
        // let data = await API.graphql(graphqlOperation(getUser, {'id': id}));
        if (data.data.getUser == null){
            // Then we need to add this user
            console.log("Creating User!")
            let resp = await API.graphql(graphqlOperation(createUser, {input: {
                'id': user.username,
                'email': user.attributes.email,
                'given_name': user.attributes.given_name,
                'family_name': user.attributes.family_name,
                'nickname': user.attributes.nickname
            }}));
            console.log(resp);
            setUserData(resp.data);
        }
        else{
            console.log("User Exists");
            setUserData(data.data.getUser);
        }
    }

    // On Load
	useEffect(() => {
        checkUser();
    }, []);

    console.log(userData);

    const renderLeagueList = () => {
        if (userData == undefined || userData.Leagues == undefined){
            return <ReactLoading color='red' type='balls'/>
        }
        return <LeagueList 
            leagues={userData.Leagues.items}
            refreshUser={checkUser}
            />
    }

    return (
        <>
            <Layout pageName='Home'>
                <div className='p-6'>
                    <h1 className='text-3xl text-gray-500 mb-4'>
                        Your Leagues
                    </h1>
                    {renderLeagueList()}
                </div>
            </Layout>
        </>
    )
}
