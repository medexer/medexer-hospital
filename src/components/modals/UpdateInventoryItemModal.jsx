import { toast } from 'react-toastify'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import { IconBlood } from '../../assets'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'
import { hospitalUpdateInventoryItemUnits } from '../../state/redux/actions/hospital.actions'
import LoadingButtonOne from '../buttons/LoadingButtonOne'


const UpdateInventoryItemModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentInventoryItem, hospitalRequestStatus } = useSelector(state => state.hospital)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { inventoryItem: 0, units: 0, count: 0, bloodGroup: '' })


    useEffect(() => {
        if (currentInventoryItem) {
            updateFormData({
                inventoryItem: currentInventoryItem?.pkid,
                units: currentInventoryItem?.bloodUnits,
                bloodGroup: currentInventoryItem?.bloodGroup,
            })
        }
    }, [currentInventoryItem])


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        dispatch(hospitalUpdateInventoryItemUnits({ formData, toast, updateModals }))
    }

    console.log(currentInventoryItem)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img
                            alt=""
                            src={IconBlood}
                            className='w-[25px] rounded-full'
                        />
                        <HeaderOne
                            semibold={true}
                            size={'text-[14px]'}
                            color={'text-red-600'}
                            text={`Update ${currentInventoryItem?.bloodGroup} Units`}
                        />
                    </div>

                    <ModalHeader
                        modalHandler={() => updateModals({ showUpdateInventoryItemModal: !modals.showUpdateInventoryItemModal })}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    {/* <div className='flex justify-center space-x-10 items-center my-10'>
                        <div
                            onClick={() => {
                                // if (formData.units === 0) return
                                // updateFormData({ units: formData.units - 1, count: parseInt(formData.count + 1) })
                            }}
                            className='border rounded-md px-4 py-2 cursor-pointer'
                        >
                            -
                        </div>

                        <input
                            disabled
                            value={formData.units}
                            className="border border-gray-300 text-[40px] rounded w-[120px] max-w-[140px] px-2 text-center font-bold py-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue"
                        />

                        <div
                            disabled
                            onClick={() => {
                                // updateFormData({ units: formData.units + 1, count: parseInt(formData.count + 1) })
                            }}
                            className='border rounded-md px-4 py-2 cursor-pointer'
                        >
                            +
                        </div>
                    </div> */}

                    <div className="py-10 text-[14px]">
                        <span className="font-medium">This item will be withdrawn from the available stock, and the inventory will be adjusted accordingly.</span> <span className="mt-2 block font-bold">Are you sure you want to proceed?</span>
                    </div>

                    {/* <p className='text-[10px] text-center text-red-500'>Note that you are updating the number of pints of this blood group.</p> */}

                    <div className="flex justify-between">
                        {hospitalRequestStatus === 'PENDING' ? (
                            <LoadingButtonOne
                                loadingType={'one'}
                                classes={'py-2 text-[14px] rounded-md bg-red-600 w-full mt-4'}
                            />
                        ) : (
                            <button
                                type="submit"
                                className=" w-full bg-red-600 rounded text-white text-[12px] py-2 px-6 hover:-translate-y-[2px] ease-in-out duration-700 transition-all focus:outline-none"
                            >
                                Update
                            </button>
                        )}
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateInventoryItemModal