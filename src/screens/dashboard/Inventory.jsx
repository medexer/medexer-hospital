import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppInventoryItems } from '../../data'
import { HeaderText, InventoryTable, ManageInventoryItem } from '../../components'
import { hospitalFetchInventory } from '../../state/redux/actions/hospital.actions'


const Inventory = () => {
    const dispatch = useDispatch()

    const { inventoryItems } = useSelector(state => state.hospital)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showInventoryItem: false, currentItem: ''
    })

    useEffect(() => {
        dispatch(hospitalFetchInventory())
    }, [config.showInventoryItem])

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            {!config.showInventoryItem && (
                <div>
                    <div className="flex flex-col">
                        <HeaderText
                            text={'Inventory'}
                            classes={'text-[14px] font-semibold'}
                        />
                        <p className="text-[12px] text-gray-500">List of blood groups and units available</p>
                    </div>

                    <InventoryTable
                        data={inventoryItems}
                        updateConfig={updateConfig}
                    />
                </div>
            )}

            {config.showInventoryItem && (
                <ManageInventoryItem
                    updateConfig={updateConfig}
                />
            )}
        </div >
    )
}

export default Inventory