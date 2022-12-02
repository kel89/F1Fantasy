// import logo from './logo.svg';
import './App.css';

// Testing amplify auth
// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { atRule } from 'postcss';

Amplify.configure(awsExports);

const formFields = {
	signUp: {
		nickname: {
			label: "Username",
			placeholder: "Enter your Username"
		},
		given_name: {
			label: "First Name",
			placeholder: "Enter your First Name"
		},
		family_name: {
			label: "Last Name",
			placeholder: "Enter your Last Name"
		}
	}
}

function App() {
	// Define custome signup handler
	const services = {
		async handleSignUp(formData){
			// Extract the form data
			let {username, password, attributes} = formData;
			console.log(formData);
			username = username.toLowerCase();
			attributes.email = attributes.email.toLowerCase();

			// Signup
			Auth.signUp({
				
			})
		}
	}

	return (
		<div className='h-screen w-screen bg-red-600 flex items-center justify-center'>
			<div>
				<h1 className='text-white text-3xl font-semibold text-center mb-2'>
					Ken's Fantasy Formula 1
				</h1>
				<Authenticator 
					services={services}
					formFields={formFields}>
					{({ signOut, user }) => (
						<main>
							<h1>Hello {user.username}</h1>
							<button className='btn' onClick={signOut}>Sign out</button>
						</main>
					)}
				</Authenticator>
			</div>
		</div>
	);
}

export default App;
// export default withAuthenticator(App);
