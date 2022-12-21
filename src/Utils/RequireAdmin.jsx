/**
 * RequireAdmin
 * Like require auth, but requires that they user is logged in
 * and belongs to the admin group
 */

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useLocation, Navigate} from 'react-router-dom';

export function RequireAdmin({children}){
    const location = useLocation();
    const {route, user} = useAuthenticator(c => [c.route, c.user]);

    // Make sure user logged in
    if (route !== 'authenticated') {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // User logged in, verify they are an admin user
    let userGroups = user.signInUserSession.idToken.payload['cognito:groups'];
    if (userGroups == undefined || !userGroups.includes("admin")){
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Case when both authenticated, and admin user
    return children;
}