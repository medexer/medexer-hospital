import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Animation2 } from '../../assets'
import HeaderText from '../text/HeaderText'
import { useGlobalState } from '../../state/context'
import DonorMedicalHistoryTable from '../tables/DonorMedicalHistoryTable'
import { hospitalFetchDonorMedicalHistory } from '../../state/redux/actions/hospital.actions'


const ManageDonorMedicalHistory = ({ updateConfig }) => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalState()
    const { currentDonor, medicalHistory } = useSelector(state => state.hospital)

    useEffect(() => {
        if (currentDonor) {
            dispatch(hospitalFetchDonorMedicalHistory({ donor: currentDonor?.pkid }))
        }
    }, [currentDonor])

    console.log(medicalHistory)

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col">
                {console.log(currentDonor)}
                <HeaderText
                    text={`${currentDonor?.donorID}'s Medical History`}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">Manage {currentDonor?.donorID} medical history.</p>
            </div>

            <div className="flex justify-between items-center w-full mt-2">
                <button
                    type="button"
                    onClick={() => {
                        updateConfig({ manageDonorHistory: false })
                    }}
                    className="bg-primary rounded-md flex justify-center text-white text-[12px] py-2 font-medium px-2 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={() => {
                        updateModals({ showAddMedicalHistoryModal: true })
                    }}
                    className="bg-sky-600 rounded-md flex justify-center text-white text-[12px] py-2 font-medium px-2 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                >
                    Add Record
                </button>
            </div>

            <div className="mt-2">
                {medicalHistory?.length > 0 && (
                    <DonorMedicalHistoryTable
                        data={medicalHistory}
                    />
                )}

                {medicalHistory?.length === 0 && (
                    <div className="flex flex-col items-center h-[400px]">
                        <Lottie
                            loop={true}
                            className='h-full'
                            animationData={Animation2}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ManageDonorMedicalHistory