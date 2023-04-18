import { toast } from 'react-toastify'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'
import { IoIosNotifications } from 'react-icons/io'
import { hospitalUpdateNotification } from '../../state/redux/actions/hospital.actions'


const ReadNotificationModal = () => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { currentNotification } = useSelector(state => state.hospital)

    console.log(currentNotification)

    useEffect(() => {
        if (!currentNotification?.is_read) {
            dispatch(hospitalUpdateNotification({ notificationId: currentNotification?.pkid }))
        }
    }, [currentNotification])


    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white w-[700px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="bg-slate-100 p-2 rounded-md">
                            <IoIosNotifications
                                size={18}
                                className='text-primary'
                            />
                        </div>
                        <HeaderOne
                            semibold={true}
                            size={'text-[14px]'}
                            color={'text-sky-600'}
                            text={`Notification`}
                        />
                    </div>

                    <ModalHeader
                        modalHandler={() => updateModals({ showReadNotificationModal: !modals.showReadNotificationModal })}
                    />
                </div>

                <div className="mt-3 space-y-4 max-h-[500px] overflow-y-auto scrollbar-4">
                    <div>
                        {/* <p className='text-[14px] font-medium text-slate-600'>Title</p> */}
                        <p className='text-[14px] font-medium text-slate-600'>{currentNotification?.title}</p>
                    </div>
                    <p className='text-[12px]'>{currentNotification?.message}</p>
                </div>

            </div>
        </div>
    )
}

export default ReadNotificationModal
