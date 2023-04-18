import { toast } from 'react-toastify'
import { IoIosArrowBack } from 'react-icons/io'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGlobalState } from '../../state/context'
import { hospitalFetchComplaintThread, hospitalResetStateProperty, hospitalUpdateComplaintStatus } from '../../state/redux/actions/hospital.actions'


const ComplaintInfo = ({ config, updateConfig }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentComplaint, complaintThread, complaintStatusUpdate } = useSelector(state => state.hospital)

    useEffect(() => {
        if (currentComplaint || complaintStatusUpdate) {
            dispatch(hospitalFetchComplaintThread({ complaintId: currentComplaint?.pkid }))
        }
    }, [currentComplaint, complaintStatusUpdate])


    return (
        <div className='mb-10 w-full px-[10px]'>
            <button
                type="submit"
                onClick={() => {
                    updateConfig({ showComplaint: false })
                    dispatch(hospitalResetStateProperty({ key: 'CurrentComplaint', data: null }))
                }}
                className="bg-primary text-white py-1 font-medium px-1 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
            >
                <IoIosArrowBack />
            </button>

            <div className="flex justify-between items-center mt-1">
                <div>
                    <select
                        type="text"
                        name="type"
                        onChange={(e) => {
                            if (e.target.value === '') return

                            const formData = {
                                status: e.target.value,
                                complaintId: currentComplaint?.pkid,
                            }

                            dispatch(hospitalUpdateComplaintStatus({ formData, toast }))
                            // dispatch(hospitalUpdateComplaintStatus({ formData, toast, dispatch, hospitalResetStateProperty }))
                        }}
                        className="border border-gray-400 bg-white text-gray-light rounded focus:outline-none focus:border-gray-400 focus:text-gray-800 text-[12px] block px-2.5 py-1 outline-none w-full"
                    >
                        <option value="">STATUS</option>
                        {['CLOSED', 'REOPENED']?.map((item, index) => (
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        ))}
                    </select>
                </div>

                <p className='text-[12px] text-indigo-600 font-medium underline'>{currentComplaint?.status}</p>

                {currentComplaint?.status !== 'CLOSED' && (
                    <button
                        type="submit"
                        onClick={() => {
                            updateModals({ showReplyComplaintThreadModal: !modals.showReplyComplaintThreadModal })
                        }}
                        className="bg-sky-600 rounded text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Post a reply
                    </button>
                )}
            </div>

            <div className="flex flex-col mt-5">
                {complaintThread?.map((thread, index) => (
                    <Fragment key={index}>
                        {thread?.updateType === 'STATUS' && (
                            <div
                                className="bg-slate-300 text-white px-4 py-3 shadow flex flex-col mb-4"
                            >
                                <div className='flex items-center space-x-2'>
                                    {/* {handleTextFormat(thread?.updatedByUser.id, thread?.headline)} */}
                                    <p>{thread?.headline}</p>

                                    <p className='text-[12px] font-bold'>{thread?.created_at?.slice(0, 10)}</p>
                                </div>

                            </div>
                        )}
                        {thread?.updateType === 'THREAD' && (
                            <div
                                className="border border-slate-600 bg-white px-4 py-3 shadow flex flex-col mb-4"
                            >
                                <div className="flex justify-between items-center">

                                    <div className='flex items-center space-x-2'>
                                        {/* {handleTextFormat(thread?.updatedByUser.id, thread?.headline)} */}
                                        <p>{thread?.headline}</p>
                                        <p className='text-[12px] '>{thread?.created_at?.slice(0, 10)}</p>
                                    </div>
                                    <p className='text-[12px]'>{thread?.edited ? 'Edited' : ''}</p>
                                </div>

                                <p className='text-[12px] text-gray-600'>{thread?.message}</p>

                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default ComplaintInfo