import Lottie from 'lottie-react'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Animation5 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { ComplaintCard, ComplaintInfo, HeaderText } from '../../components'
import { hospitalFetchComplaints } from '../../state/redux/actions/hospital.actions'


const Complaints = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { complaints } = useSelector(state => state.hospital)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showComplaint: false
    })

    useEffect(() => {
        dispatch(hospitalFetchComplaints())
    }, [])

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            {!config.showComplaint && complaints?.length > 0 && (
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <HeaderText
                                text={'Inventory'}
                                classes={'text-[14px] font-semibold'}
                            />
                            <p className="text-[12px] text-gray-500">Manage your complaints</p>
                        </div>

                        <button
                            type="submit"
                            onClick={() => updateModals({ showCreateComplaintModal: !modals.showCreateComplaintModal })}
                            className="bg-green-600 rounded text-white text-[12px] py-2 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                        >
                            Add New
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-between gap-5 mt-5">
                        {complaints?.map((complaint, index) => (
                            <ComplaintCard
                                key={index}
                                index={index}
                                config={config}
                                complaint={complaint}
                                updateConfig={updateConfig}
                            />
                        ))}
                    </div>
                </div>
            )}

            {config.showComplaint && (
                <ComplaintInfo
                    config={config}
                    updateConfig={updateConfig}
                />
            )}

            {!config.showComplaint && complaints?.length === 0 && (
                <div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <HeaderText
                                text={'Inventory'}
                                classes={'text-[14px] font-semibold'}
                            />
                            <p className="text-[12px] text-gray-500">Manage your complaints</p>
                        </div>

                        <button
                            type="submit"
                            onClick={() => updateModals({ showCreateComplaintModal: !modals.showCreateComplaintModal })}
                            className="bg-green-600 rounded text-white text-[12px] py-2 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                        >
                            Add New
                        </button>
                    </div>
                    <div className="h-[300px] w-full">
                        <Lottie
                            loop={true}
                            className='h-full'
                            animationData={Animation5}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Complaints