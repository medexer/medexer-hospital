import { useRef } from 'react'
import { GoPencil } from 'react-icons/go'
import React, { useReducer } from 'react'

import { UserAvatar1 } from '../../assets'
import { CustomButton, FormPasswordInput, FormTextInput, HeaderText } from '../../components'


const Settings = () => {
    const imageRef = useRef()

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', password: '', imagePreview: ''
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        updateFormData({ [e.target.name]: e.target.files[0], imagePreview: URL.createObjectURL(e.target.files[0]) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Settings'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">Update your account information</p>
            </div>

            <div className="w-[40%] flex flex-col space-y-2 mt-5">
                <div className="flex justify-center relative">
                    <img
                        alt=""
                        src={UserAvatar1}
                        className='w-[100px] rounded-full border-2 shadow-md'
                    />
                    <div
                        onClick={() => imageRef.current.click()}
                        className='absolute bottom-0 ml-12 p-2 rounded-full cursor-pointer bg-white text-black'
                    >
                        <GoPencil />
                        <input
                            type='file'
                            ref={imageRef}
                            className='hidden'
                            accept="image/jpg, image/jpeg"
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <FormTextInput
                        label={'Name'}
                        name={'name'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Daisy Land Hospital'}
                        padding={'px-5 py-3'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                    />
                    <FormTextInput
                        label={'Email'}
                        name={'email'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'info@daisylandhospital.com'}
                        padding={'px-5 py-3'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                    />
                    <FormPasswordInput
                        name={'password'}
                        label={'Password'}
                        padding={'px-5 py-3'}
                        placeHolder={'Password'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md pr-14 mb-1'}
                    />

                    <div className="mt-5">
                        <CustomButton
                            type={'submit'}
                            title={'Update'}
                            textColor={'text-white'}
                            width={'w-full md:w-full'}
                            classes={'py-3 text-[14px] rounded-md bg-sky-600'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings