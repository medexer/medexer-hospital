import React from 'react'
import { useDispatch } from 'react-redux'
import { FaDownload } from 'react-icons/fa'
import { BsBuildingCheck, BsCalendarDate, BsCheck } from 'react-icons/bs'

import { useGlobalState } from '../../state/context'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'


const NotificationCard = ({ notification }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()

    return (
        <div
            onClick={() => {
                updateModals({ showReadNotificationModal: !modals.showReadNotificationModal })
                dispatch(hospitalResetStateProperty({ key: 'CurrentNotification', data: notification }))
            }}
            className={`
                flex items-center space-x-4 gap-2 bg-white px-2 py-3 border-b cursor-pointer w-full transition-all duration-700 ease-in-out hover:translate-x-1
            `}
        >
            <div className={`flex items-center w-2 h-2 rounded-full bg-sky-600 ${notification?.is_read && 'bg-slate-300'}`}>
            </div>

            {notification?.notificationType === 'APP_UPDATE' && (
                <FaDownload
                    size={16}
                    className='text-sky-600'
                />
            )}
            {notification?.notificationType === 'APPOINTMENT' && (
                <BsCalendarDate
                    size={18}
                    className='text-red-400'
                />
            )}
            {notification?.notificationType === 'COMPLAINT' && (
                <BsCheck
                    size={20}
                    className='text-green-400'
                />
            )}
            {notification?.notificationType === 'ADMIN' && (
                <BsBuildingCheck
                    size={18}
                    className='text-indigo-400'
                />
            )}

            <div className="flex flex-col">
                <p className='text-[14px] font-medium text-slate-600'>{notification?.title}</p>
                <p className='text-[12px]'>{notification?.created_at?.slice(0, 10)}</p>
            </div>
        </div>
    )
}

export default NotificationCard