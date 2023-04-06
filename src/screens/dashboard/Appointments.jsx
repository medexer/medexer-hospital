import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'


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
        <div className='h-full flex flex-col overflow-y-auto font-lato scrollbar-1 px-6'>
            Appointments
        </div>
    )
}

export default Appointments