import LeagueCard from "./LeagueCard";

export default function LeagueList({leagues}){
    console.log(leagues);
    

    const renderNewOptions = () => {
        return (
            <div className='flex flex-col gap-4'>
                <div className='w-60 h-28 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500 hover:border-red-500'>
                    Create League
                </div>
                <div className='w-60 h-28 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500 hover:border-red-500'>
                    Join League
                </div>
            </div>
        )
    }

    return (
        <div className='flex gap-4'>
            {
                leagues.map(league => {
                    return <LeagueCard data={league}/>
                })
            }
            {renderNewOptions()}
        </div>
    )
}