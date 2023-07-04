import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'
import { validateGenerateComplaint } from '../../state/validations/hospital.validations'
import { toast } from 'react-toastify'
import { hospitalGenerateComplaint } from '../../state/redux/actions/hospital.actions'


const CreateComplaintModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentAppointment } = useSelector(state => state.hospital)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { title: '', message: '' })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateGenerateComplaint(formData)
        if (message) return toast.error(message)

        dispatch(hospitalGenerateComplaint({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Generate Complaint`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showCreateComplaintModal: !modals.showCreateComplaintModal })}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="flex items-center">
                            <Label text={'Title'} size={'text-[12px]'} />
                            <p className="text-red-500">*</p>
                        </div>
                        <input
                            type="text"
                            name="title"
                            placeholder='Title'
                            className="border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full h-5 px-5 py-5 hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue "
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='mt-2'>
                        <div className="flex items-center">
                            <Label text={'Message'} size={'text-[12px]'} />
                            <p className="text-red-500">*</p>
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
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default CreateComplaintModal