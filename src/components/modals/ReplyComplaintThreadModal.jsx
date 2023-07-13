import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'
import { hospitalReplyComplaintThread } from '../../state/redux/actions/hospital.actions'
import { useEffect } from 'react'
import LoadingButtonOne from '../buttons/LoadingButtonOne'


const ReplyComplaintThreadModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentComplaint, hospitalRequestStatus } = useSelector(state => state.hospital)

    console.log(currentComplaint)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { id: 0, message: '' })

    useEffect(() => {
        if (currentComplaint) {
            updateFormData({
                id: currentComplaint?.pkid
            })
        }
    }, [currentComplaint])

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.message) return toast.error('Message is required')
        dispatch(hospitalReplyComplaintThread({ formData, toast, updateModals }))
    }

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[500px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Reply Complaint`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showReplyComplaintThreadModal: !modals.showReplyComplaintThreadModal })}
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='mt-2'>
                        <Label text={'Message'} size={'text-[12px]'} />
                        <textarea
                            name="message"
                            rows="6"
                            placeholder=''
                            onChange={handleChange}
                            className='w-full placeholder:text-[12px] text-[12px] bg-white border border-gray-200 rounded resize-none focus:outline-none px-3 py-3 focus:border-gray-600 scrollbar-4'
                        >
                        </textarea>
                    </div>

                    {hospitalRequestStatus === 'PENDING' ? (
                        <LoadingButtonOne
                            loadingType={'one'}
                            classes={'py-2 text-[14px] rounded-md bg-sky-600 w-full mt-4'}
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

export default ReplyComplaintThreadModal