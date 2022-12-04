import { useAuthenticator } from "@aws-amplify/ui-react";
import { DataArray } from "@mui/icons-material";

export default function LeagueCard({data}){
    const { user} = useAuthenticator((context) => [context.user]);
    console.log(data);
    return (
        <div className='border-2 border-gray-400 text-gray-600 shadow-lg rounded-lg w-60 h-60 p-6 hover:border-red-500 cursor-pointer'>
            <h3 className='text-xl'>
                {data.league.name}
            </h3>
            <p>
                Players: {data.league.users.items.length}
            </p>
            {/* {
                JSON.parse(DataArray.league.leagueOwnerId) == user.username ? (
                    <>**Owner</>
                ) : null
            } */}
        </div>
    )
} 