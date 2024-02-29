import { useState } from "react"
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

export default function RaceEditor({raceData, getRaceData}){

    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(raceData.date);
    const [country, setCountry] = useState(raceData.country);
    const [city, setCity] = useState(raceData.city);
    const [raceName, setRaceName] = useState(raceData.name);

    const updateCountryText = (val) => {
        setCountry(val.target.value);
    }

    const updateCityText = (val) => {
        setCity(val.target.value);
    }

    const updateRaceNameText = (val) => {
        setRaceName(val.target.value);
    }

    return (
        <div className='bg-white p-4 border shadow-lg'>
            <h1 className='text-xl text-gray-500 font-racing pb-2'>
                Edit Race
            </h1>
            <div className='pb-4'>
                <TextField
                    fullWidth
                    id='newCountry'
                    variant='standard'
                    label='Country'
                    value={country}
                    disabled={loading}
                    onChange={updateCountryText}/>
            </div>
            <div className='pb-4'>
                <TextField
                    fullWidth
                    id='newCity'
                    variant='standard'
                    label='City'
                    value={city}
                    disabled={loading}
                    onChange={updateCityText}/>
            </div>
            <div className='pb-4'>
                <TextField
                    fullWidth
                    id='newRaceName'
                    variant='standard'
                    label='Date'
                    value={raceName}
                    disabled={loading}
                    onChange={updateRaceNameText}/>
            </div>
        </div>
    )
}