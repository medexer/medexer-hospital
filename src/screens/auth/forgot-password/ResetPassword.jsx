import { toast } from 'react-toastify'
import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Background, Logo1 } from '../../../assets'
import { authHospitalSignin } from '../../../state/redux/actions/auth.actions'
import { validateHospitalSignin } from '../../../state/validations/auth.validations'
import { CustomButton, FormPasswordInput, FormTextInput, HeaderText, LoadingButtonOne } from '../../../components'


const ResetPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { authRequestStatus } = useSelector(state => state.auth)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '', hospitalID: ''
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateHospitalSignin(formData)
        if (message) return toast.error(message)

        // dispatch(authHospitalSignin({ formData, toast, navigate }))
        // navigate('/dashboard', { replace: true })
    }

    return (
        <div className='h-screen flex justify-center  overflow-y-hidden font-poppins' style={{ backgroundImage: `url(${Background})` }}>
            {/* <div className="w-[60%] h-full">
                <img
                    alt="bg"
                    src={Background1}
                    className='w-full h-full'
                />
            </div> */}
            <div className="w-[80%] lg:w-[40%] flex flex-col p-16 space-y-5">
                <img
                    alt="logo"
                    src={Logo1}
                    className='w-[50px] mx-auto'
                />
                {/* <p className='text-[80px] text-red-400'>
                    ForgotPassword
                </p> */}
                <HeaderText
                    text={'Reset Password'}
                    classes={'text-[30px] font-medium text-white mx-auto'}
                />

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        label={'OTP'}
                        name={'otp'}
                        labelColor={'text-white'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'OTP'}
                        classes={'text-[14px] placeholder:text-[14px] placeholder:text-white text-white rounded-md mb-5 py-3 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />

                    <FormPasswordInput
                        label={'New Password'}
                        name={'password'}
                        labelColor={'text-white'}
                        labelSize={'text-[12px]'}
                        placeHolder={'New Password'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-[14px] mb-5 placeholder:text-white text-white rounded-md pr-14 py-3 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormPasswordInput
                        label={'Confirm New Password'}
                        name={'confirmPassword'}
                        labelColor={'text-white'}
                        labelSize={'text-[12px]'}
                        placeHolder={'Confirm New Password'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-[14px] placeholder:text-white text-white rounded-md pr-14 py-3 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />

                    <div className="mt-5">
                        {authRequestStatus === 'PENDING' ? (
                            <LoadingButtonOne
                                loadingType={'one'}
                                classes={'py-3 text-[14px] rounded-md bg-red-500 w-full'}
                            />
                        ) : (
                            <CustomButton
                                type={'submit'}
                                title={'Reset Password'}
                                textColor={'text-white'}
                                width={'w-full md:w-full'}
                                classes={'py-4 text-[14px] rounded-md bg-red-500'}
                            />
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword