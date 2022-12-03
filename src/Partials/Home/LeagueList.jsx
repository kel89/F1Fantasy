

export default function LeagueList({leagues}){
    console.log(leagues);
    if (leagues.length == 0){
        return (
            <div className='flex gap-4'>
                <div className='w-60 h-60 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500'>
                    Create League
                </div>
                <div className='w-60 h-60 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500'>
                    Join League
                </div>
            </div>
        )
    }

    return (
        leagues.map(league => {
            return (
                <>
                    League
                </>
            )
        })
    )
}