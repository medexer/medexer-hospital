import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Animation6 } from '../../assets'
import { HeaderText, NotificationCard } from '../../components'
import { hospitalFetchNotifications } from '../../state/redux/actions/hospital.actions'


const Notifications = () => {
    const dispatch = useDispatch()

    const { notifications } = useSelector(state => state.hospital)

    useEffect(() => {
        dispatch(hospitalFetchNotifications())
    }, [])

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <HeaderText
                        text={'Notifications'}
                        classes={'text-[14px] font-semibold'}
                    />
                    <p className="text-[12px] text-gray-500">List of notifications and announcements</p>
                </div>
            </div>
            {notifications?.length > 0 && (
                <div className="flex flex-wrap justify-between w-full mt-2">
                    {notifications?.map((notification, index) => (
                        <NotificationCard
                            key={index}
                            notification={notification}
                        />
                    ))}
                </div>
            )}

            {notifications?.length === 0 && (
                <div className="h-[300px] w-full">
                    <Lottie
                        loop={true}
                        className='h-full'
                        animationData={Animation6}
                    />
                </div>
            )}
        </div>
    )
}

export default Notifications