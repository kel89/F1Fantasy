import { useState } from 'react';
import CreateLeagueModal from './CreateLeagueModal';

import LeagueCard from "./LeagueCard";

export default function LeagueList({leagues, refreshUser}){
    // console.log(leagues);
    const [createLeagueOpen, setCreateLeagueOpen] = useState(false);
    const [joinLeageOpen, setJoinLeaveOpen] = useState(false);

    

    const renderNewOptions = () => {
        return (
            <div className='flex flex-col gap-4'>
                <div 
                    onClick={() => setCreateLeagueOpen(true)}
                    className='w-60 h-28 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500 hover:border-red-500'>
                    Create League
                </div>
                <div className='w-60 h-28 border-2 border-dashed rounded-lg shadow-lg p-8 flex items-center justify-center text-gray-500 text-xl cursor-pointer hover:text-red-500 hover:border-red-500'>
                    Join League
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='flex flex-wrap gap-4'>
                {
                    leagues.map((league, i) => {
                        return <LeagueCard data={league} key={i}/>
                    })
                }
                {renderNewOptions()}
                <CreateLeagueModal 
                    open={createLeagueOpen}
                    setOpen={setCreateLeagueOpen}
                    refreshUser={refreshUser}
                    />
            </div>
        </>
    )
}