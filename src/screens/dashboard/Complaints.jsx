import React, { useReducer } from 'react'

import { AppComplaints } from '../../data'
import { useGlobalState } from '../../state/context'
import { ComplaintCard, ComplaintInfo, HeaderText } from '../../components'
import { useState } from 'react'


const Complaints = () => {
    const { modals, updateModals } = useGlobalState()

    const [showComplaint, setShowComplaint] = useState(false)
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showComplaint: false
    })

    console.log(config)

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            {!config.showComplaint && (
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
                        {AppComplaints?.map((complaint, index) => (
                            <ComplaintCard
                                key={index}
                                index={index}
                                complaint={complaint}
                                config={config}
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
        </div>
    )
}

export default Complaints