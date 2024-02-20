/**
 * RequireAdmin
 * Like require auth, but requires that they user is logged in
 * and belongs to the admin group
 */

import { useState, useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useLocation, Navigate } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { getUser } from "../graphql/queries";

export function RequireAdmin({ children }) {
  const location = useLocation();
  const { route, user } = useAuthenticator((c) => [c.route, c.user]);
  const [isAdmin, setIsAdmin] = useState();
  const client = generateClient();

//   useEffect(() => {
//     getAdminStatus();
//   }, []);

//   const getAdminStatus = async () => {
//     const resp = await client.graphql({
//       query: getUser,
//       variables: { id: user.userId },
//     });
//     console.log("isAdmin", resp.data.getUser.admin);
//     setIsAdmin(resp.data.getUser.admin);
//   };

  client.graphql({query: getUser, variables: {id: user.userId}}).then(
    result => {
        const admin = result.data.getUser.admin;
        if (route !== "authenticated") {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

        if (!admin){
            return <Navigate to="/" state={{ from: location}} replace />;
        }

        return children;
    }
  )

  // Make sure user logged in
//   if (route !== "authenticated") {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (!isAdmin) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }



  // .then(resp => {
  //     const isAdmin = resp.data.getUser.admin;
  //     console.log("isAdmin", isAdmin);
  //     if (!isAdmin){
  //         return <Navigate to="/" state={{ from: location }} replace />;
  //     }
  // })
  // .catch(err => console.log("WE have an error", err))

  // User logged in, verify they are an admin user
  // let userGroups = user.signInUserSession.idToken.payload['cognito:groups'];
  // if (userGroups == undefined || !userGroups.includes("admin")){
  //     return <Navigate to="/" state={{ from: location }} replace />;
  // }

  // Case when both authenticated, and admin user
//   return children;
}
