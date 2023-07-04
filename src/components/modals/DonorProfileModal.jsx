import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { UserAvatar1 } from '../../assets'
import { useGlobalState } from '../../state/context'


const DonorProfileModal = () => {
    const { modals, updateModals } = useGlobalState()
    const { currentDonorProfile } = useSelector(state => state.hospital)

    console.log(currentDonorProfile)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[600px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Donor Profile`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })}
                    />
                </div>

                <div className="my-2 flex items-center space-x-5">
                    <img
                        alt="avatar"
                        src={`${import.meta.env.VITE_APP_DEV_API_ROOT}${currentDonorProfile?.avatar}`}
                        className='rounded-full w-[120px]'
                    />
                    <div className="flex flex-col">
                        <p className="text-[16px] font-medium">{currentDonorProfile?.fullName}</p>
                    </div>
                </div>

                <form className='mt-4 flex flex-col space-y-5 items-start w-full'>
                    <div className="flex flex-col border-b w-full">
                        <Label text={'Email'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.email}</p>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Blood Group'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.bloodGroup}</p>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Has Donated Blood Previously'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.haveDonatedBlood ? 'YES' : 'NO'}</p>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Last Donation Date'} size={'text-[14px] font-semibol text-sky-600'} />
                        <div className="flex justify-between items-center">
                            <p className="text-[13px] font-medium">{currentDonorProfile?.lastBloodDonationTime}</p>
                            <p className="text-[13px] font-medium">{currentDonorProfile?.created_at}</p>
                        </div>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Tobacco Usage'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.tobaccoUsage ? 'Active' : 'Negative'}</p>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Is Recent Vaccine Recent Recipient'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.isRecentVaccineRecipient ? 'Active' : 'Negative'}</p>
                    </div>

                    <div className="flex flex-col border-b w-full">
                        <Label text={'Has Tattos'} size={'text-[14px] font-semibol text-sky-600'} />
                        <p className="text-[13px] font-medium">{currentDonorProfile?.hasTattos ? 'YES' : 'NO'}</p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default DonorProfileModal