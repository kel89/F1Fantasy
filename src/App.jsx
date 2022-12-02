//App.js
import { useEffect } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub } from 'aws-amplify';
import { Protected } from "./ProtectedComponentExample";
import { RequireAuth } from "./RequireAuth";
import { Login } from "./Login";
// import { ProtectedSecond } from '.ProtectSecond';
import { Home } from "./Home";
import { Layout } from "./Layout";

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
        Hub.listen('auth', (data) => {
            const { payload } = data;
            console.log(payload);
            if (payload.event == 'signUp'){
                // Get the username (identifier) and make DB entry
                console.log("User ID", payload.data.userSub);
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
