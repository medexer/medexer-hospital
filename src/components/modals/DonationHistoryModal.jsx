import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { Animation3 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { hospitalFetchDonorDonationHistory } from '../../state/redux/actions/hospital.actions'


const DonationHistoryModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentAppointment, donationHistory } = useSelector(state => state.hospital)

    useEffect(() => {
        if (currentAppointment) {
            dispatch(hospitalFetchDonorDonationHistory({ appointmentId: currentAppointment?.donorInfo?.pkid }))
        }
    }, [currentAppointment])

    console.log(currentAppointment)
    console.log(donationHistory)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-slate-600'}
                        text={`${currentAppointment?.donorInfo?.fullName} Donation History`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showDonationHistoryModal: !modals.showDonationHistoryModal })}
                    />
                </div>

                <div className="mt-2 flex flex-col space-y-2 max-h-[300px] overflow-y-auto scrollbar-4">
                    {donationHistory?.length > 0 && donationHistory?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 border-b py-3"
                        >
                            <p className='text-[12px] font-medium'>{index + 1}</p>
                            <p className='text-[12px]'>{item.message}</p>
                        </div>
                    ))}
                </div>

                {donationHistory?.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-[200px] mt-4">
                        <Lottie
                            lopp={true}
                            className='h-full'
                            animationData={Animation3}
                        />
                    </div>
                )}

            </div>
        </div>
    )
}

export default DonationHistoryModal