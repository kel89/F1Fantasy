//App.js
import { useEffect } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { UserHome } from "./Pages/UserHome";
import { RequireAuth } from "./Utils/RequireAuth";
import { Login } from "./Pages/Login";

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';



import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const theme = createTheme({
    palatte: {
        primary: {
            main: red[500]
        }
    }
})

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
								<UserHome />
							</RequireAuth>
						}
					/>
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

function App() {
    // Listen for auth event and create User data
    // No longer do it this way
    // useEffect(() => {
    //     Hub.listen('auth', async (data) => {
    //         const { payload } = data;
    //         console.log(payload);
    //         if (payload.event == 'signUp'){
    //             // Get the username (identifier) and make DB entry
    //             // console.log("User ID", payload.data.userSub);
    //             // console.log(payload);
    //             await API.graphql(graphqlOperation(createUser, {
    //                 input: {
    //                     'id': payload.data.userSub, 
    //                     'email': payload.data.user.username 
    //                 }
    //             }))
    //         }
    //     })
    // }, [])
	return (
		<Authenticator.Provider>
			<ThemeProvider theme={theme}>
                <MyRoutes />
            </ThemeProvider>
		</Authenticator.Provider>
	);
}

export default App;
