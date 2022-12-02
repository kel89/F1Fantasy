// components/Protected.js
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';

export function Protected() {
	const { route, user, signOut } = useAuthenticator((context) => [context.route, context.user, context.signOut]);

	const message =
		route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
    // console.log(user);
	// return <Heading level={1}>{message}</Heading>;


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
            <button className='p-3 bg-blue-500 text-white rounded-sm' onClick={test}>
                Test
            </button>
        </>
    )
}
