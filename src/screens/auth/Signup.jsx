import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
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
        <div className='h-screen flex justify-between overflow-y-hidden font-lato'>
            Signup
        </div>
    )
}

export default Signup