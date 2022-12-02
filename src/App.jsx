//App.js
import { useEffect } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { Protected } from "./ProtectedComponentExample";
import { RequireAuth } from "./RequireAuth";
import { Login } from "./Login";
// import { ProtectedSecond } from '.ProtectSecond';
import { Home } from "./Home";
import { Layout } from "./Layout";

import { createUser } from './graphql/mutations';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function MyRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					{/* <Route index element={<Home />} /> */}
					<Route
						// path="/protected"
						index
						element={
							<RequireAuth>
								<Protected />
							</RequireAuth>
						}
					/>
					{/* <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          /> */}
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

function App() {
    useEffect(() => {
        Hub.listen('auth', async (data) => {
            const { payload } = data;
            console.log(payload);
            if (payload.event == 'signUp'){
                // Get the username (identifier) and make DB entry
                // console.log("User ID", payload.data.userSub);
                // console.log(payload);
                await API.graphql(graphqlOperation(createUser, {
                    input: {
                        'id': payload.data.userSub, 
                        'email': payload.data.user.username 
                    }
                }))
            }
        })
    }, [])
	return (
		<Authenticator.Provider>
			<MyRoutes />
		</Authenticator.Provider>
	);
}

export default App;
