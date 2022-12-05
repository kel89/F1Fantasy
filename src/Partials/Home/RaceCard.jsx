import LockClockIcon from '@mui/icons-material/LockClock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function RaceCard({data}){

    // Determine if this race is LOCKED
    let now = new Date();
    let locked = now > data.date;

    return (
        <div className='w-full border border-gray-200 rounded-lg shadow-sm p-3 flex justify-between hover:border-red-500'>
            <div>
                <div className='text-lg'>
                    {data.name}
                </div>
                <div className='text-gray-500'>
                    {(new Date(data.date)).toLocaleDateString()}
                </div>
            </div>
            <div>
                {
                    locked ? (
                        <LockClockIcon />
                    ) : (
                        <LockOpenIcon />
                    )
                }
            </div>
        </div>
    )
}