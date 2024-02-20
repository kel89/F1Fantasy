//App.js
import { useEffect } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub, API , graphqlOperation } from 'aws-amplify';
import { RequireAuth } from "./Utils/RequireAuth";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

// import { Amplify } from 'aws-amplify';
// import config from './amplifyconfiguration.json';


import "./App.css";
import { UserHome } from "./Pages/UserHome";
import { Login } from "./Pages/Login";
import About from './Pages/About';
// import League from './Pages/League';
import Race from './Pages/Race';
import { RequireAdmin } from './Utils/RequireAdmin';
import AdminPage from './Pages/AdminPage';
import Settings from './Pages/Settings';

// console.log(config);
// Amplify.configure(config);


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
                                            <RequireAuth>
                                                <AdminPage />
                                            </RequireAuth>
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
	return (
		<Authenticator.Provider>
            <MyRoutes />
		</Authenticator.Provider>
	);
}

export default App;
