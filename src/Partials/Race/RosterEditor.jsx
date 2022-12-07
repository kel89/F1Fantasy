import { ReactSortable } from "react-sortablejs";


export default function RosterEditor({
	rosterData,
	driverData,
	driverOrder,
	setDriverOrder,
}) {

    // Any time an order changes, update the state
    // This will force a re-render

    /**
     * All this component has to do is render the drivers in order
     * allow the user to update that order with some interace
     * and save that order in setDriverOrder, then a re-render should be automatic
     */
	return (
        <div className="flex justify-center bg-gray-100">
            <div>
                <div className='text-xl font-bold'>
                    Drag and Drop to reorder
                </div>
                <ReactSortable 
                    list={driverOrder} 
                    setList={setDriverOrder}
                    className='w-56'>
                    {
                        driverOrder.map((d, i) => {
                            let driver = driverData.find(x => x.driver.abbreviation==d.id);
                            return (
                                <div
                                    className={`w-full my-2 border border-gray-300 rounded-sm py-1 px-3 shadow-lg cursor-move
                                    ${i == 0 ? 'bg-amber-200' : ''} 
                                    ${i == 1 ? 'bg-gray-300' : ''} 
                                    ${i==2 ? 'bg-yellow-500' : ''}
                                    ${i>2 ? 'bg-white' : ''}`}
                                    key={d.id}>
                                    <b>{i+1}</b> {driver.driver.first_name} {driver.driver.last_name}
                                </div>
                            )
                        })
                    }
                </ReactSortable>
            </div>
        </div>
    );
}
