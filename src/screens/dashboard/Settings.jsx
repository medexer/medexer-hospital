import { useRef } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useReducer } from 'react'

import { UserAvatar1 } from '../../assets'
import { CustomButton, FormPasswordInput, FormTextInput, HeaderText } from '../../components'
import { validateHospitalProfileUpdate } from '../../state/validations/auth.validations'
import { authUpdateHospitalProfile } from '../../state/redux/actions/auth.actions'


const Settings = () => {
    const imageRef = useRef(null)
    const dispatch = useDispatch()

    const { hospital } = useSelector(state => state.auth.user)

    console.log(hospital);

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        email: '', 
        imagePreview: '', hospitalName: '',
        currentPassword: '', newPassword: '',
    })

    useEffect(() => {
        if (hospital) {
            updateFormData({
                email: hospital?.email,
                hospitalName: hospital?.hospitalName,
            })
        }
    }, [hospital])

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        updateFormData({ [e.target.name]: e.target.files[0], imagePreview: URL.createObjectURL(e.target.files[0]) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(formData)
        const message = validateHospitalProfileUpdate(formData)
        if(message) return toast.error(message)

        dispatch(authUpdateHospitalProfile({formData, toast}))
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
                        padding={'px-5 py-2'}
                        name={'hospitalName'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        placeHolder={'Daisy Land Hospital'}
                        currentValue={formData.hospitalName}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                    />
                    <FormTextInput
                        name={'email'}
                        label={'Email'}
                        padding={'px-5 py-2'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        currentValue={formData.email}
                        placeHolder={'info@daisylandhospital.com'}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                    />
                    <FormPasswordInput
                        name={'currentPassword'}
                        label={'Current Password'}
                        padding={'px-5 py-2'}
                        placeHolder={'Password'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        currentValue={formData.currentPassword}
                        classes={'text-[14px] placeholder:text-[14px] rounded-md pr-14 mb-1'}
                        />
                    <FormPasswordInput
                        name={'newPassword'}
                        label={'New Password'}
                        padding={'px-5 py-2'}
                        placeHolder={'Password'}
                        labelSize={'text-[12px]'}
                        handleChange={handleChange}
                        currentValue={formData.newPassword}
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