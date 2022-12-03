// components/Protected.js
import { useEffect } from 'react';
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { getUser } from './graphql/queries'

export function UserHome() {
	const { route, user, signOut } = useAuthenticator((context) => [context.route, context.user, context.signOut]);

	useEffect(() => {
        const checkUser = async () => {
            // Make sure we have database entry for this user
            let id = user.username;
            console.log(id);
            console.log(user);
            let data = await API.graphql(graphqlOperation(getUser, {'id': id}));
            console.log(data);
            if (data.getUser == null){
                // Then we need to add this user
                let resp = await API.graphql(graphqlOperation(createUser, {input: {
                    'id': user.username,
                    'email': user.attributes.email,
                    'given_name': user.attributes.given_name,
                    'family_name': user.attributes.family_name,
                    'nickname': user.attributes.nickname
                }}));
                console.log(resp);
            }
        }
        checkUser();
    }, [])

    const test = async () => {
        console.log("Testing");
        await API.graphql(graphqlOperation(createUser, {input: {'id': 'aswer', 'email': "test@test.com"}}))
    }


    return (
        <>
            First Protected Route
            <p>
                Welcome {user.attributes.nickname}
            </p>
            <button onClick={signOut} className='btn border px-2 py-1'>SignOut</button>

            <br/>
            {/* <button className='p-3 bg-blue-500 text-white rounded-sm' onClick={test}>
                Test
            </button> */}
        </>
    )
}
