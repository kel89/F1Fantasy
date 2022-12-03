// components/Protected.js
import { useEffect, useState } from 'react';
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
import { getUser } from '../graphql/queries'
// import MainDrawer from '../Utils/MainDrawer';
import Layout from '../Utils/Layout';
import LeagueList from '../Partials/Home/LeagueList';


export function UserHome() {
	const { route, user, signOut } = useAuthenticator((context) => [context.route, context.user, context.signOut]);
    const [menuOpen, setMenuOpen] = useState(false);

    const [userData, setUserData] = useState();
    // signOut();
    
    /**
     * Checks to see if the user exists in the DB, if not, we create them
     */
    const checkUser = async () => {
        // Make sure we have database entry for this user
        let id = user.username;
        let data = await API.graphql(graphqlOperation(getUser, {'id': id}));
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

    const getUserData = async () => {
        let resp = await API.graphql(graphqlOperation(getUser, {'id': user.username}));
        setUserData(resp.data);
        console.log(resp.data);
    }

    const test = async () => {
        console.log("Testing");
        await API.graphql(graphqlOperation(createUser, {input: {'id': 'aswer', 'email': "test@test.com"}}))
    }

    console.log(userData);
    // console.log(userData.Leagues ? 'yes': 'no')
    // if (Object.keys(userData).includes("Leagues")){
    //     console.log(userData.Leagues);
    // }
    return (
        <>
            <Layout pageName='Home'>
                <div className='p-6'>
                    <h1 className='text-3xl text-gray-500 mb-4'>
                        Your Leagues
                    </h1>
                    <LeagueList leagues={[]} />
                </div>
            </Layout>
        </>
    )
}