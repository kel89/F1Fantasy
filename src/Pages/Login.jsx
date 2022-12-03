// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

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

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    // <View className="auth-wrapper">
    //   <Authenticator formFields={formFields}></Authenticator>
    // </View>
    <div className='h-screen w-screen bg-red-600 flex items-center justify-center'>
        <div>
            <h1 className='text-white text-3xl font-semibold text-center mb-2'>
                Ken's Fantasy Formula 1
            </h1>
            <Authenticator formFields={formFields}> </Authenticator>
        </div>
    </div>
  );
}