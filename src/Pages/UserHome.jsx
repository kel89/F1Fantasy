// components/Protected.js
import { useEffect, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from '@aws-amplify/api';
import { getUser } from '../graphql/queries'
import { fetchUserAttributes } from 'aws-amplify/auth';
import Layout from '../Utils/Layout';
import { createUser } from '../graphql/mutations';
// import RaceList from '../Partials/Home/RaceList';
// import LeaderBoard from '../Partials/Home/LeaderBoard';
import CommissionersCorner from '../Partials/Home/CommissionersCorner';


export function UserHome() {
	const { user} = useAuthenticator((context) => [context.route, context.user, context.signOut]);
    const [userData, setUserData] = useState();
    const client = generateClient();

    const checkUserAndAdd = async () => {
        const userInDB = await isUserInDB();
        if (!userInDB){
            await addUserToDB();
        }
    }

    const isUserInDB = async () => {
        const result = await client.graphql({query: getUser, variables: {id: user.username}});
        if (result.data.getUser == null){
            return false;
        }
        else {
            return true;
        }
    }

    const addUserToDB = async () => {
        // Get user attributes
        const userAttributes = await fetchUserAttributes();
        console.log(userAttributes);

        const result = await client.graphql({query: createUser, variables: {
            input: {
                id: user.username,
                email: userAttributes.email,
                given_name: userAttributes.given_name,
                family_name: userAttributes.family_name,
                nickname: userAttributes.nickname,
                total_points: 0
            }
        }});
       }


    const loadUserData = async () => {
        const result = await client.graphql({query: getUser, variables: {id: user.username}});
        setUserData(result.data.getUser);
    }

    const initUser = async () => {
        await checkUserAndAdd();
        await loadUserData();
    }
    // On Load
	useEffect(() => {
        initUser();
    }, []);

    return (
        <>
            <Layout pageName='Home'>
                <div className='p-6 grid sm:grid-cols-2 grid-cols-1 gap-8 bg-gray-100'>
                    <div>
                        {/* <RaceList /> */}
                    </div>
                    <div className='flex flex-col gap-8 '>
                        <div>
                            {/* <LeaderBoard /> */}
                        </div>
                        <div>
                            <CommissionersCorner />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
