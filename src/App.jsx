//App.js
import { useEffect } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { UserHome } from "./Pages/UserHome";
import { RequireAuth } from "./Utils/RequireAuth";
import { Login } from "./Pages/Login";
import About from './Pages/About';


import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import League from './Pages/League';
import Race from './Pages/Race';
import { RequireAdmin } from './Utils/RequireAdmin';
import AdminPage from './Pages/AdminPage';
import Settings from './Pages/Settings';



function MyRoutes() {
	return (
		// <BrowserRouter>
			<HashRouter>
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
                                    <Route
                                        path="/league/:id"
                                        element={
                                            <RequireAuth>
                                                <League />
                                            </RequireAuth>
                                        }
                                    />
                                    <Route
                                        path="/race/:id"
                                        element={
                                            <RequireAuth>
                                                <Race />
                                            </RequireAuth>
                                        }
                                    />
                                    <Route
                                        path="/about"
                                        element={
                                            <RequireAuth>
                                                <About />
                                            </RequireAuth>
                                        }
                                    />
                                    <Route
                                        path="/admin"
                                        element={
                                            <RequireAdmin>
                                                <AdminPage />
                                            </RequireAdmin>
                                        }
                                    />
                                    <Route
                                        path='/settings'
                                        element={
                                            <RequireAuth>
                                                <Settings />
                                            </RequireAuth>
                                        }
                                    />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </HashRouter>
		// </BrowserRouter>
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
            <MyRoutes />
		</Authenticator.Provider>
	);
}

export default App;
