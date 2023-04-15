import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppInventoryItems } from '../../data'
import { HeaderText, InventoryTable } from '../../components'
import { hospitalFetchInventory } from '../../state/redux/actions/hospital.actions'


const Inventory = () => {
    const dispatch = useDispatch()

    const { inventoryItems } = useSelector(state => state.hospital)

    useEffect(() => {
        dispatch(hospitalFetchInventory())
    }, [])

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Inventory'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">List of blood groups and units available</p>
            </div>

            <InventoryTable
                data={inventoryItems}
            />
        </div>
    )
}

export default Inventory