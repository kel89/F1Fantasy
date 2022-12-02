// components/Protected.js
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
export function Protected() {
	const { route, user, signOut } = useAuthenticator((context) => [context.route, context.user, context.signOut]);

	const message =
		route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
    console.log(user);
	// return <Heading level={1}>{message}</Heading>;
    return (
        <>
            First Protected Route
            <p>
                Welcome {user.attributes.nickname}
            </p>
            <button onClick={signOut} className='btn border px-2 py-1'>SignOut</button>
        </>
    )
}
