import { useState } from 'react';
import PopUpRosterPreview from './PopUpRosterPreview';



export default function RosterList({rosters}){
    const [openPreview, setOpenPreview] = useState(false);
    const [toPreview, setToPreview] = useState();
    const [rosterOwner, setRosterOwner] = useState();

    const showPreview = (rosterId, nickname) => {
        setRosterOwner(nickname);
        setToPreview(rosterId);
        setOpenPreview(true);
    }

    return (
        <>
        <div className='p-4 bg-white border shadow-lg'>
            <h2 className='font-racing text-xl text-gray-500'>
                Other Rosters
            </h2>
            <div>
                {
                    rosters?.sort((a,b) => b.total_points - a.total_points).map((ros, i) => {
                        return (
                            <div
                                className='w-full border-b border-gray-100 flex justify-between cursor-pointer' 
                                onClick={() => showPreview(ros.id, ros.user.nickname)}
                                key={i}>
                                <div>
                                    {ros.user.nickname}
                                </div>
                                <div>
                                    {ros.total_points}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <PopUpRosterPreview
            rosterId={toPreview}
            rosterOwner={rosterOwner}
            open={openPreview}
            setOpen={setOpenPreview}
            />
        </>
    )
}