import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { Animation4 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { hospitalFetchInventoryItemHistory } from '../../state/redux/actions/hospital.actions'


const InventoryItemActivityModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentInventoryItem, inventoryItemHistory } = useSelector(state => state.hospital)

    useEffect(() => {
        if (currentInventoryItem) {
            dispatch(hospitalFetchInventoryItemHistory({ bloodGroup: currentInventoryItem?.bloodGroup }))
        }
    }, [currentInventoryItem])

    console.log(inventoryItemHistory)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-slate-600'}
                        text={`${currentInventoryItem?.bloodGroup} Donation Activity`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showInventoryItemHistoryModal: !modals.showInventoryItemHistoryModal })}
                    />
                </div>

                <div className="mt-2 flex flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-4">
                    {inventoryItemHistory?.length > 0 && inventoryItemHistory?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 border-b py-3"
                        >
                            <p className='text-[12px] font-medium'>{index + 1}</p>
                            <p className='text-[14px]'>{item.activity}</p>
                        </div>
                    ))}
                </div>

                {inventoryItemHistory?.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[250px] mt-4">
                        <Lottie
                            lopp={true}
                            className='h-full'
                            animationData={Animation4}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default InventoryItemActivityModal