import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

import { Background, Background2, Logo1 } from '../../assets'
import { CustomButton, FormPasswordInput, FormPhoneInput, FormTextInput, HeaderText } from '../../components'


const Signup = () => {
    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '', countryCode: 'NG',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='h-screen flex justify-center overflow-y-hidden font-poppins' style={{backgroundImage: `url(${Background})`}}>
            {/* <div className="w-[60%] h-full">
                <img
                    alt="bg"
                    src={Background2}
                    className='w-full h-full'
                />
            </div> */}
            <div className="w-[40%] flex flex-col px-16 pt-4 space-y-2">
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
                    classes={'text-[30px] font-medium text-white'}
                />

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        padding={'px-5 py-2.5'}
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
                        padding={'px-5 py-2.5'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Email address'}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormTextInput
                        label={'Hospital ID'}
                        padding={'px-5 py-2.5'}
                        name={'hospitalID'}
                        labelSize={'text-[12px]'}
                        labelColor={'text-white'}
                        handleChange={handleChange}
                        placeHolder={'Hospital ID'}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormPhoneInput
                        name={'location'}
                        label={'Location'}
                        labelColor={'text-white'}
                        formData={formData}
                        placeHolder={'Location'}
                        handleChange={handleChange}
                        inputClasses={'bg-[#ffffff00] placeholder:text-white border-0'}
                        classes={'rounded-md py-2 mb-1 bg-[#ffffff30] backdrop-blur-sm border-0 z-10'}
                    />
                    <FormPasswordInput
                        name={'password'}
                        label={'Password'}
                        padding={'px-5 py-2.5'}
                        labelColor={'text-white'}
                        placeHolder={'Password'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-white text-white rounded-md mb-1 bg-[#ffffff30] backdrop-blur-sm border-0'}
                    />
                    <FormPasswordInput
                        name={'password'}
                        padding={'px-5 py-2.5'}
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