import { toast } from 'react-toastify'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { UserAvatar1 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { hospitalProcessDonation } from '../../state/redux/actions/hospital.actions'
import { validateProcessDonation } from '../../state/validations/hospital.validations'
import LoadingButtonOne from '../buttons/LoadingButtonOne'


const ProcessDonationModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentAppointment, hospitalRequestStatus } = useSelector(state => state.hospital)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { id: 0, donationDate: '', pints: 1, bloodGroup: '' })

    useEffect(() => {
        if (currentAppointment) {
            updateFormData({
                id: currentAppointment?.pkid,
            })
        }
    }, [currentAppointment])

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateProcessDonation(formData)
        if (message) return toast.error(message)
        console.log(formData)

        dispatch(hospitalProcessDonation({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[600px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Process Appointment`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showProcessDonationModal: !modals.showProcessDonationModal })}
                    />
                </div>

                <div className="my-2 flex items-center space-x-5">
                    <img
                        alt="avatar"
                        src={`${currentAppointment?.donorInfo?.userAvatar}`}
                        className='rounded-full w-[80px]'
                    />
                    <div className="flex flex-col">
                        <p className="text-[14px] font-medium">{currentAppointment?.donorInfo?.fullName}</p>
                        <p className="text-[12px] font-medium text-gray-600">Blood Group: <span className="text-black font-semibold">{currentAppointment?.donorInfo?.bloodGroup}</span></p>
                        {/* <p className="text-[12px] font-medium text-gray-600">{currentAppointment?.phone}</p> */}
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="flex items-center mt-2">
                            <Label text={'Blood Group'} size={'text-[12px]'} />
                            <span className='text-red-500'>*</span>
                        </div>
                        {/* <select
                            name="bloodGroup"
                            placeholder='Blood Group'
                            value={formData.bloodGroup}
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-300 text-black placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        >
                            <option value="Blood Group" className='text-black'>Blood Group</option>
                            {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((group, index) => (
                                <option
                                    key={index}
                                    value={group}
                                    className='text-black'
                                >{group}</option>
                            ))}
                        </select> */}
                        <input
                            type='text'
                            name="bloodGroup"
                            placeholder='Blood Group'
                            onChange={(e) => handleChange(e)}
                            className="border border-gray-300 text-black placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        />
                    </div>
                    <div>
                        <div className="flex items-center mt-2">
                            <Label text={'Number of Pints'} size={'text-[12px]'} />
                            <span className='text-red-500'>*</span>
                        </div>
                        <input
                            min={1}
                            max={1}
                            type="number"
                            name="pints"
                            disabled
                            value={1}
                            placeholder='Number of Pints'
                            // onChange={(e) => handleChange(e)}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                        />
                    </div>
                    <div>
                        <div className="flex items-center mt-2">
                            <Label text={'Donation Date'} size={'text-[12px]'} />
                            <span className='text-red-500'>*</span>
                        </div>
                        <input
                            type="date"
                            name="donationDate"
                            min={new Date().toISOString().slice(0, 10)}
                            max={new Date().toISOString().slice(0, 10)}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    {hospitalRequestStatus === 'PENDING' ? (
                        <LoadingButtonOne
                            loadingType={'one'}
                            classes={'py-2 text-[14px] rounded-md bg-sky-500 w-full'}
                        />
                    ) : (
                        <button
                            type="submit"
                            className="w-full mt-4 bg-sky-600 rounded text-white text-[12px] py-2 px-6 hover:-translate-y-[2px] ease-in-out duration-700 transition-all focus:outline-none"
                        >
                            Submit
                        </button>
                    )}
                </form>

            </div>
        </div>
    )
}

export default ProcessDonationModal