export default function LeaderboardCard({data}){

    return(
        <div className='w-full border border-gray-200 rounded-lg shadow-sm p-3 flex justify-between hover:border-red-500'>
        <div>
            <div className='text-lg'>
                {data.nickname}
            </div>
            <div className='text-gray-500'>
                {data.given_name}
            </div>
        </div>
        <div>
            Total Points Here
        </div>
    </div>
    )
}