import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Animation2 } from '../../assets'
import { AppointmentsTable, HeaderText } from '../../components'
import { hospitalFetchAppointments } from '../../state/redux/actions/hospital.actions'


const Appointments = () => {
    const dispatch = useDispatch()

    const { appointments } = useSelector(state => state.hospital)

    useEffect(() => {
        dispatch(hospitalFetchAppointments())
    }, [])

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Appointments'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">List of people scheduled to donate blood</p>
            </div>

            {appointments?.length > 0 && (
                <AppointmentsTable
                    data={appointments}
                />
            )}

            {(!appointments || appointments?.length === 0) && (
                <div className="flex flex-col items-center h-[400px]">
                    <Lottie
                        loop={true}
                        className='h-full'
                        animationData={Animation2}
                    />
                </div>
            )}
        </div>
    )
}

export default Appointments