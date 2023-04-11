import React, { useReducer } from 'react'

import { AppInventoryItems } from '../../data'
import { HeaderText, InventoryTable } from '../../components'


const Inventory = () => {

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Inventory'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">List of people scheduled to donate blood</p>
            </div>

            <InventoryTable
                data={AppInventoryItems}
            />
        </div>
    )
}

export default Inventory