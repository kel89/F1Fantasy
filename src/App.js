import logo from './logo.svg';
import './App.css';

// Testing amplify auth
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App({ signOut, user }) {
	return (
		<div className="App">
			<Heading level={1}>Hello {user.username}</Heading>
			<Button onClick={signOut}>Sign Out</Button>

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

// export default App;
export default withAuthenticator(App);
