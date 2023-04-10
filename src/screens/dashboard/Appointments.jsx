import React, { useReducer } from 'react'

import { AppAppointments } from '../../data'
import { AppointmentsTable, HeaderText } from '../../components'


const Appointments = () => {
    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 pt-4'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Appointments'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">List of people scheduled to donate blood</p>
            </div>

            <AppointmentsTable
                data={AppAppointments}
            />
        </div>
    )
}

export default Appointments