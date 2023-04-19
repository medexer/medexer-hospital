import { toast } from 'react-toastify'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { UserAvatar1 } from '../../assets'
import { useGlobalState } from '../../state/context'
import { hospitalRescheduleAppointment } from '../../state/redux/actions/hospital.actions'
import { validateAppointmentReschedule } from '../../state/validations/hospital.validations'


const RescheduleAppointmentModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentAppointment } = useSelector(state => state.hospital)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { id: 0, date: '', message: '', previousDate: '' })

    useEffect(() => {
        if (currentAppointment) {
            updateFormData({
                id: currentAppointment?.pkid,
                date: currentAppointment?.date,
                previousDate: currentAppointment?.date,
            })
        }
    }, [currentAppointment])

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateAppointmentReschedule(formData)
        if (message) return toast.error(message)
        console.log(formData)

        dispatch(hospitalRescheduleAppointment({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[600px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Reschedule Appointment`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showRescheduleAppointmentModal: !modals.showRescheduleAppointmentModal })}
                    />
                </div>

                <div className="my-2 flex items-center space-x-5">
                    <img
                        alt="avatar"
                        src={UserAvatar1}
                        className='rounded-full w-[80px]'
                    />
                    <div className="flex flex-col">
                        <p className="text-[14px] font-medium">{currentAppointment?.donorInfo?.fullName}</p>
                        <p className="text-[12px] font-medium text-gray-600">{currentAppointment?.donorInfo?.bloodGroup}</p>
                        <p className="text-[12px] font-medium text-gray-600">{currentAppointment?.phone}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {formData.previousDate && (
                        <div>
                            <Label text={'Previous date'} size={'text-[12px]'} />
                            <input
                                type="date"
                                name="date"
                                disabled
                                value={formData?.previousDate?.slice(0, 10)}
                                className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            />
                        </div>
                    )}
                    <div>
                        <div className="flex items-center mt-2">
                            <Label text={'New date'} size={'text-[12px]'} />
                            <span className='text-red-500'>*</span>
                        </div>
                        <input
                            type="date"
                            name="date"
                            min={new Date().toISOString().slice(0, 10)}
                            // value={formData?.date?.slice(0, 10)}
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    
                    <div className='mt-2'>
                        <div className="flex items-center mt-2">
                            <Label text={'Message'} size={'text-[12px]'} />
                            <span className='text-red-500'>*</span>
                        </div>
                        <textarea
                            name="message"
                            rows="8"
                            placeholder=''
                            onChange={handleChange}
                            className='w-full placeholder:text-[12px] text-[12px] bg-white border border-gray-200 rounded resize-none focus:outline-none px-3 py-3 focus:border-gray-600 scrollbar-4'
                        >
                        </textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-sky-600 rounded text-white text-[12px] py-2 px-6 hover:-translate-y-[2px] ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Reschedule
                    </button>
                </form>

            </div>
        </div>
    )
}

export default RescheduleAppointmentModal