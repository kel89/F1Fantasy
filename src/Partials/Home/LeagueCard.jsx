import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataArray } from "@mui/icons-material";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useNavigate } from "react-router-dom";

export default function LeagueCard({data}){
    const { user} = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();
    // console.log(data);
    // console.log(data.league.leagueOwnerId);

    const goToLeague = () => {
        navigate(`/league/${data.league.id}`, {state: {'leagueId': data.league.id}})
    }

    return (
        <div 
            onClick={goToLeague}
            className='border border-gray-400 text-gray-600 shadow-lg rounded-lg w-60 h-60 p-6 hover:border-red-500 cursor-pointer'>
            <div className='flex flex-col gap-5'>
                <h3 className='text-xl'>
                    {data.league.name}
                </h3>
                <p>
                    Players: {data.league.users.items.length}
                </p>
                {
                    data.league.leagueOwnerId == user.username ? (
                        <div className='text-gray-400'>
                            <CoPresentIcon />
                            <span className='ml-2'>Your League</span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
} 