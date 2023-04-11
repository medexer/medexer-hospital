import axios from 'axios'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGlobalState } from '../../state/context'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'
import { AppComplaintThreads } from '../../data'


const ComplaintInfo = ({ config, updateConfig }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    // const { profile } = useSelector(state => state.auth.user)
    const { currentComplaint, complaintThread, complaintStatusUpdate } = useSelector(state => state.hospital)

    useEffect(() => {
        if (currentComplaint || complaintStatusUpdate) {
            // dispatch(userFetchTicketInfo({ id: currentComplaint?.id }))
        }
    }, [currentComplaint, complaintStatusUpdate])


    // console.log(currentComplaint)
    // console.log(complaintThread)
    return (
        <div className='mb-10 w-full px-[10px]'>
            <button
                type="submit"
                onClick={() => {
                    updateConfig({ showComplaint: false })
                    dispatch(hospitalResetStateProperty({ key: 'CurrentComplaint', data: null }))
                }}
                className="bg-slate-800 text-white py-2 font-medium px-2 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
            >
                <IoIosArrowBack />
            </button>

            <div className="flex justify-between items-center mt-1">
                <div>
                    <select
                        type="text"
                        name="type"
                        onChange={(e) => {
                            const formData = {
                                id: currentComplaint?.id,
                                ticketStatus: e.target.value
                            }

                            // dispatch(userUpdateTicketStatus({ formData, toast, dispatch, setCurrentUserData }))
                        }}
                        className="border border-gray-400 bg-white text-gray-light rounded focus:outline-none focus:border-gray-400 focus:text-gray-800 text-[14px] block px-2.5 py-1 outline-none w-full"
                    >
                        <option value="">Update Status</option>
                        {['CLOSED', 'REOPENED']?.map((item, index) => (
                            <option
                                key={index}
                                value={item}
                            >{item}</option>
                        ))}
                    </select>
                </div>

                <p className='text-[12px] text-indigo-600 font-medium underline'>{currentComplaint?.currentTicketStatus}</p>

                {currentComplaint?.complaintStatus !== 'CLOSED' && (
                    <button
                        type="submit"
                        onClick={() => {
                            updateModals({ showReplyComplaintThreadModal: !modals.showReplyComplaintThreadModal })
                        }}
                        className="bg-sky-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
                    >
                        Post a reply
                    </button>
                )}
            </div>

            <div className="flex flex-col mt-5">
                {AppComplaintThreads?.map((thread, index) => (
                    <Fragment key={index}>
                        {thread.updateType === 'STATUS' && (
                            <div
                                className="bg-slate-300 text-white px-4 py-3 shadow flex flex-col mb-4"
                            >
                                <div className='flex items-center space-x-2'>
                                    {/* {handleTextFormat(thread.updatedByUser.id, thread.headline)} */}
                                    <p>{thread.headline}</p>

                                    <p className='text-[12px] font-bold'>{thread.dateUpdated?.slice(0, 10)}</p>
                                </div>

                            </div>
                        )}
                        {thread.updateType === 'THREAD' && (
                            <div
                                className="border border-slate-600 bg-white px-4 py-3 shadow flex flex-col mb-4"
                            >
                                <div className="flex justify-between items-center">

                                    <div className='flex items-center space-x-2'>
                                        {/* {handleTextFormat(thread.updatedByUser.id, thread.headline)} */}
                                        <p>{thread.headline}</p>
                                        <p className='text-[12px] '>{thread.dateUpdated?.slice(0, 10)}</p>
                                    </div>
                                    <p className='text-[12px]'>{thread.edited ? 'Edited' : ''}</p>
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