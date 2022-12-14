export default function ResultsPreview({results}){

    const getDriverImage = (abbreviation) => {
        try {
            return (
                <img 
                    className='inline-block h-8 w-8'
                    src={require(`../../assets/drivers/${abbreviation.toLowerCase()}.png`)} 
                    alt={''} />
            )
        } catch {
            return null
        }
    }


    return (
        <div className='bg-white p-4 border shadow-lg'>
            <h1 className='text-xl text-gray-500 font-racing'>
                Race Results
            </h1>
            <table className='table-auto w-full'>
                <thead className=' border-b'>
                    <tr className='text-left'>
                        <th className="text-gray-900 px-3 py-2">Place</th>
                        <th className="text-gray-900 px-3 py-2">Driver</th>
                        <th className="text-gray-900 px-3 py-2">Points</th>
                    </tr>
                </thead>
                <tbody>
                {
                    results.sort((a,b) => b.points - a.points).map((result, i) => {
                        return (
                            <tr key={i} className='border-b even:bg-gray-50 transition duration-150 hover:bg-red-100'>
                                <td className="px-3 py-2 text-gray-900">{i+1}</td>
                                <td className="sm:px-3 text-xs sm:text-base px-0 py-2 text-gray-900">
                                    {/* <img 
                                        className='inline-block h-8 w-8'
                                        src={require(`../../assets/drivers/${result.driver.abbreviation.toLowerCase()}.png`)} 
                                        alt={''} /> */}
                                    {getDriverImage(result.driver.abbreviation)}
                                    {result.driver.first_name} {result.driver.last_name}
                                </td>
                                <td className="px-3 py-2 text-gray-900">{result.points}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}