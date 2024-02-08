import React, {useState, useEffect} from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import Layout from "../Utils/Layout";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { updateUser } from '../graphql/mutations';
import { fetchUserAttributes, updateUserAttributes } from 'aws-amplify/auth';
import { generateClient } from '@aws-amplify/api';



export default function Settings(){

	const { user} = useAuthenticator((context) => [context.route, context.user, context.signOut]);
	// const [newName, setNewName] = useState(user.attributes.nickname);
	const [newName, setNewName] = useState('');
	const [loading, setLoading] = useState(false);
	const apiClient = generateClient();

	useEffect(() => {
		const loadUserData = async () => {
			const userAttributes = await fetchUserAttributes();
			setNewName(userAttributes.nickname);
		}
		loadUserData();
	}, [])


	const updateTextBox = (val) => {
		setNewName(val.target.value);
	}

	const changeName = async() => {
		setLoading(true);

		// Update AUTH
		const userAttributes = await fetchUserAttributes();
		await updateUserAttributes({userAttributes: {"nickname": newName}});

		// Update DB
		const result = await apiClient.graphql({query: updateUser, variables: {input: {id: user.username, nickname: newName}}});

		setLoading(false);
	}

	return (
		<>
			<Layout pageName='Settings'>
				<div className='p-6 grid sm:grid-cols-2 grid-cols-1 gap-8 bg-gray-100'>
					<div className='border border-gray rounded-lg p-2 bg-white m-1 shadow-lg gap-2 grid grid-cols-1'>
						<h1 className='font-racing text-xl text-gray-700'>Change Nickname</h1>
						<TextField 
							id='newnickname' 
							variant='standard' 
							label='New Nickname' 
							value={newName} 
							disabled={loading}
							onChange={updateTextBox}/>
						<div className='max-w-xs'>
							<LoadingButton
								loading={loading}
								variant='outlined'
								color='success'
								onClick={changeName}>
								Change Name
							</LoadingButton>
						</div>
					</div>
					
				</div>
			</Layout>
		</>
	)
}