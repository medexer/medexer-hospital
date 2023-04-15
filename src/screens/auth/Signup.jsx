import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'

import { Background, Logo1 } from '../../assets'
import { authHospitalSignup } from '../../state/redux/actions/auth.actions'
import { CustomButton, FormPasswordInput, FormPhoneInput, FormTextInput, HeaderText } from '../../components'
import { validateHospitalSignup } from '../../state/validations/auth.validations'


const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        location: '', password: '', confirmPassword: '',
        hospitalName: '', email: '', countryCode: 'NG', country: 'Nigeria',
    })

    const handleChange = (e) => {
        if (e.target.name === 'location') {
            return updateFormData({ location: `${e.target.value}, ${formData.country}` })
        }
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateHospitalSignup(formData)
        if (message) return toast.error(message)

        console.log(formData)
        dispatch(authHospitalSignup({ formData, toast, navigate }))
    }

    return (
        <div className='h-screen flex justify-center items-center overflow-y-hidden font-poppins' style={{ backgroundImage: `url(${Background})` }}>
            {/* <div className="w-[60%] h-full">
                <img
                    alt="bg"
                    src={Background2}
                    className='w-full h-full'
                />
            </div> */}
            <div className="w-[80%] lg:w-[40%] flex flex-col px-16 pt-4 space-y-2">
                <img
                    alt="logo"
                    src={Logo1}
                    className='w-[50px] mx-auto'
                />
                {/* <p className='text-[80px] text-red-400'>
                    Login
                </p> */}
                <HeaderText
                    text={'Signup'}
                    classes={'text-[30px] font-medium text-white mx-auto'}
                />

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        padding={'px-5 py-3.5'}
                        name={'hospitalName'}
                        labelColor={'text-white'}
                        label={'Hospital Name'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Hospital name'}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormTextInput
                        name={'email'}
                        label={'Email'}
                        labelColor={'text-white'}
                        padding={'px-5 py-3.5'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Email address'}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormPhoneInput
                        name={'location'}
                        label={'Location'}
                        labelSize={'text-[12px]'}
                        labelColor={'text-white'}
                        formData={formData}
                        placeHolder={'Location'}
                        handleChange={handleChange}
                        updateFormData={updateFormData}
                        inputClasses={'bg-[#ffffff00] placeholder:text-white border-0'}
                        classes={'rounded-md py-3 mb-1 bg-[#ffffff30] backdrop-blur-sm border-0 z-10'}
                    />
                    <FormPasswordInput
                        name={'password'}
                        label={'Password'}
                        padding={'px-5 py-3.5'}
                        labelColor={'text-white'}
                        placeHolder={'Password'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormPasswordInput
                        name={'confirmPassword'}
                        padding={'px-5 py-3.5'}
                        labelColor={'text-white'}
                        labelSize={'text-[12px]'}
                        label={'Confirm Password'}
                        handleChange={handleChange}
                        placeHolder={'Confirm password'}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />


                    <div className="mt-5">
                        <CustomButton
                            type={'submit'}
                            title={'Signup'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'py-4 text-[14px] rounded-md bg-red-500'}
                        />
                    </div>

                    <div className="flex justify-center space-x-2 mt-2">
                        <p className="text-[12px] text-white">Already have an account?</p>
                        <Link to={'/'} className='text-[12px] text-white'>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup