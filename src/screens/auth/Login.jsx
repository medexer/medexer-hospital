import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Background1, Logo1 } from '../../assets'
import { CustomButton, FormPasswordInput, FormTextInput, HeaderText } from '../../components'


const Login = () => {
    const navigate = useNavigate()

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

        navigate('/dashboard', { replace: true })
    }

    return (
        <div className='h-screen flex justify-between  overflow-y-hidden font-poppins'>
            <div className="w-[60%] h-full">
                {/* bg-[url('src/assets/images/bg__1.jpg')] bg-cover bg-no-repeat */}
                <img
                    alt="bg"
                    src={Background1}
                    className='w-full h-full'
                />
            </div>
            <div className="w-[40%] flex flex-col p-16 space-y-5">
                <img
                    alt="logo"
                    src={Logo1}
                    className='w-[50px]'
                />
                {/* <p className='text-[80px] text-red-400'>
                    Login
                </p> */}
                <HeaderText
                    text={'Login'}
                    classes={'text-[30px] font-medium'}
                />

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        label={'Email'}
                        name={'email'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Email address'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-5 py-3'}
                    />
                    <FormTextInput
                        label={'Hospital ID'}
                        name={'hospitalID'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Hospital ID'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-5 py-3'}
                    />
                    <FormPasswordInput
                        label={'Password'}
                        name={'password'}
                        labelSize={'text-[12px]'}
                        placeHolder={'Password'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md pr-14 py-3'}
                    />
                    <div className="flex justify-between mt-1">
                        <div></div>
                        <Link to={'/forgot-password'} className='text-[12px] text-gray-600'>
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="mt-5">
                        <CustomButton
                            type={'submit'}
                            title={'Login'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'py-4 text-[14px] rounded-md bg-red-500'}
                        />
                    </div>

                    <div className="flex justify-center space-x-2 mt-2">
                        <p className="text-[12px]">Don't have an account?</p>
                        <Link to={'/signup'} className='text-[12px] text-gray-600'>
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login