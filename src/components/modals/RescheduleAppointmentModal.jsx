import React, { useReducer } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'


const RescheduleAppointmentModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { departmentName: '' })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[500px] px-[30px] py-[20px] rounded border-gray-600 border">
                <div className="flex justify-between">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Reschedule Appointment`}
                    />

                    <ModalHeader
                        type={2}
                        modalHandler={() => updateModals({ showAdminAddDepartmentModal: !modals.showAdminAddDepartmentModal })}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="departmentName"
                            placeholder="Department name"
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-sky-600 rounded text-white text-[12px] py-2 px-6 hover:translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Add
                    </button>
                </form>

            </div>
        </div>
    )
}

export default RescheduleAppointmentModal