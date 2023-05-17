import React, {useState, useEffect} from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import Layout from "../Utils/Layout";
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { updateUser } from '../graphql/mutations';



export default function Settings({}){

	const { user} = useAuthenticator((context) => [context.route, context.user, context.signOut]);
	const [newName, setNewName] = useState(user.attributes.nickname);
	const [loading, setLoading] = useState(false);


	const updateTextBox = (val) => {
		setNewName(val.target.value);
	}

	const changeName = async() => {
		setLoading(true);

		// Change in Cognito
		await Auth.updateUserAttributes(user, {
			'nickname': newName
		  });

		// Change in DynamoDB
		let messageDetails = {
			id: user.username,
			nickname: newName
		};
		let resp = await API.graphql(graphqlOperation(updateUser, {input:messageDetails}));

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