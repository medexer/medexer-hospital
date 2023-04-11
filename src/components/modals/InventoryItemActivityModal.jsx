import React from 'react'
import { useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'


const InventoryItemActivityModal = () => {
    const { modals, updateModals } = useGlobalState()
    const { currentInventoryItem } = useSelector(state => state.hospital)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-slate-600'}
                        text={`${currentInventoryItem?.name} Activity`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showInventoryItemHistoryModal: !modals.showInventoryItemHistoryModal })}
                    />
                </div>

                <div className="mt-2 flex flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-4">
                    {new Array(5).fill(currentInventoryItem?.recentActivity).map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 border-b py-3"
                        >
                            <p className='text-[12px] font-medium'>{index + 1}</p>
                            <p className='text-[14px]'>{item}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default InventoryItemActivityModal