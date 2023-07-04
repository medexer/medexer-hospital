import Lottie from 'lottie-react'
import { useDispatch, useSelector } from 'react-redux'
import React, { Fragment, useEffect, useReducer } from 'react'

import { Animation2 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { hospitalFetchMedicalHistoryDonors } from '../../state/redux/actions/hospital.actions'
import { HeaderText, ManageDonorMedicalHistory, MedicalHistoryDonorsTable } from '../../components'


const Donors = () => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalState()
    const { donors } = useSelector(state => state.hospital)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        currentTab: 'Medical History', manageDonorHistory: false
    })

    useEffect(() => {
        dispatch(hospitalFetchMedicalHistoryDonors())
    }, [])

    console.log(donors)

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            {config.currentTab === 'Medical History' && !config.manageDonorHistory && (
                <Fragment>
                    <div className="flex flex-col">
                        <HeaderText
                            text={'Donors'}
                            classes={'text-[14px] font-semibold'}
                        />
                        <p className="text-[12px] text-gray-500">Manage and search for blood donors.</p>
                    </div>

                    <div className="mt-2 flex space-x-10 py-1 border- w-full">
                        {['Medical History', 'Search Donors'].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    if (item === 'Search Donors') {
                                        updateModals({ showDonorSearchModal: true })
                                    } else {
                                        updateConfig({ currentTab: item })
                                    }
                                }}
                                className={`text-[12px] cursor-pointer ${item === config.currentTab ? 'text-white font-medium bg-primary py-2 px-2' : 'text-slate-600 border border-slate-600 py-2 px-2'}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Fragment>
            )}

            {config.currentTab === 'Medical History' && !config.manageDonorHistory && (
                <MedicalHistoryDonorsTable
                    data={donors}
                    updateConfig={updateConfig}
                />
            )}

            {config.currentTab === 'Medical History' && !config.manageDonorHistory && donors?.length === 0 && (
                <div className="flex flex-col items-center h-[400px]">
                    <Lottie
                        loop={true}
                        className='h-full'
                        animationData={Animation2}
                    />
                </div>
            )}

            {config.currentTab === 'Medical History' && config.manageDonorHistory && (
                <ManageDonorMedicalHistory
                    updateConfig={updateConfig}
                />
            )}
        </div>
    )
}

export default Donors