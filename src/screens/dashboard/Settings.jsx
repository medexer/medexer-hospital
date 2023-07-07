import { useRef } from 'react'
import { toast } from 'react-toastify'
import { GoPencil } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useReducer } from 'react'

import { Hospital } from '../../assets'
import { authFetchHospitalProfile, authUpdateHospitalAuthData, authUpdateHospitalProfile } from '../../state/redux/actions/auth.actions'
import { validateHospitalAuthDataUpdate, validateHospitalProfileUpdate } from '../../state/validations/auth.validations'
import { CustomButton, FormPasswordInput, FormTextInput, HeaderText, Label, LoadingButtonOne } from '../../components'
import axios from 'axios'


const Settings = () => {
    const imageRef = useRef(null)
    const hospitalLogoRef = useRef(null)
    const hospitalImageRef = useRef(null)

    const dispatch = useDispatch()
    const { authRequestStatus } = useSelector(state => state.auth)

    const { hospital } = useSelector(state => state.auth.user)
    const { hospitalProfile } = useSelector(state => state.auth)

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        currentTab: 'Authentication',
    })
    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        imagePreview: '', hospitalName: '',
        currentPassword: '', newPassword: '', hospitalLogo: '', hospitalLogoPreview: '',
        email: '', hospitalImage: '', hospitalImagePreview: '', currentHospitalImage: '',
        address: '', state: '', city_province: '', contact_number: '', about_hospital: '',
    })

    useEffect(() => {
        dispatch(authFetchHospitalProfile())
    }, [])

    useEffect(() => {
        if (hospital) {
            updateFormData({
                email: hospital?.email,
                hospitalName: hospital?.hospitalName,
            })
        }
    }, [hospital])

    useEffect(() => {
        if (hospitalProfile) {
            updateFormData({
                address: hospitalProfile?.address,
                state: hospitalProfile?.state,
                city_province: hospitalProfile?.city_province,
                contact_number: hospitalProfile?.contact_number,
                about_hospital: hospitalProfile?.about_hospital,
                hospitalImage: hospitalProfile?.hospitalImage,
                hospitalLogo: hospitalProfile?.hospitalLogo,
                hospitalLogoPreview: hospitalProfile?.hospitalLogo,
                hospitalImagePreview: hospitalProfile?.hospitalImage,
            })

            // if (hospitalProfile?.hospitalImage) {
            //     urlToObject(hospitalProfile?.hospitalImage)
            // }
        }
    }, [hospitalProfile])

    console.log(hospitalProfile)

    // const urlToObject = async (image) => {
    //     console.log(image)

    //     const response = await axios.get(image);

    //     console.log(response.data)

    //     const blob = await response.data.blob();

    //     const file = new File([blob], `hospitalImage.jpg`, { type: blob.type });

    //     updateFormData({ hospitalImage: file, hospitalImagePreview: URL.createObjectURL(file) })
    // }

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        if (e.target.name === 'hospitalImage') {
            return updateFormData({ hospitalImage: e.target.files[0], hospitalImagePreview: URL.createObjectURL(e.target.files[0]) })
        }
        if (e.target.name === 'hospitalLogo') {
            return updateFormData({ hospitalLogo: e.target.files[0], hospitalLogoPreview: URL.createObjectURL(e.target.files[0]) })
        }
        updateFormData({ [e.target.name]: e.target.files[0], imagePreview: URL.createObjectURL(e.target.files[0]) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        const message = validateHospitalAuthDataUpdate(formData)
        if (message) return toast.error(message)

        dispatch(authUpdateHospitalAuthData({ formData, toast }))
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault()

        console.log(formData)
        const message = validateHospitalProfileUpdate(formData)
        if (message) return toast.error(message)

        dispatch(authUpdateHospitalProfile({ formData, toast }))
    }

    // console.log(formData.hospitalImagePreview)

    return (
        <div className='h-full flex flex-col overflow-y-auto font-poppins scrollbar-1 px-6 py-4 pb-20'>
            <div className="flex flex-col">
                <HeaderText
                    text={'Settings'}
                    classes={'text-[14px] font-semibold'}
                />
                <p className="text-[12px] text-gray-500">Manage your account information</p>
            </div>

            <div className="mt-2 flex space-x-10 py-1 border-b w-full">
                {['Authentication', 'Profile'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            updateConfig({ currentTab: item })
                        }}
                        className={`text-[12px] cursor-pointer ${item === config.currentTab ? 'text-black font-medium' : 'text-slate-600'}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {config.currentTab === 'Authentication' && (
                <div className="md:w-[40%] flex flex-col space-y-2 mt-5">
                    {/* <div className="flex justify-center relative">
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
                    </div> */}

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
            )}

            {config.currentTab === 'Profile' && (
                <div className="w-full flex md:space-x-10 mt-5">
                    <div className="flex flex-col md:w-[40%]">
                        <div className="flex justify-center relative w-full h-[200px] mx-auto md:mx-0">
                            <img
                                alt=""
                                src={formData.hospitalImage ? formData.hospitalImagePreview : Hospital}
                                className='w-full h-full border shadow-md'
                            />
                            <div
                                onClick={() => hospitalImageRef.current.click()}
                                className='absolute top-0 right-0 p-2 rounded-full cursor-pointer bg-green-600 text-black'
                            >
                                <GoPencil
                                    className='text-white'
                                />
                                <input
                                    type='file'
                                    name='hospitalImage'
                                    className='hidden'
                                    ref={hospitalImageRef}
                                    onChange={handleFileChange}
                                    accept="image/jpg, image/jpeg"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center relative w-full h-[200px] mx-auto md:mx-0 mt-2">
                            <img
                                alt=""
                                src={formData.hospitalLogo ? formData.hospitalLogoPreview : Hospital}
                                className='w-full h-full border shadow-md'
                            />
                            <div
                                onClick={() => imageRef.current.click()}
                                className='absolute top-0 right-0 p-2 rounded-full cursor-pointer bg-sky-600 text-black'
                            >
                                <GoPencil
                                    className='text-white'
                                />
                                <input
                                    type='file'
                                    name='hospitalLogo'
                                    className='hidden'
                                    ref={imageRef}
                                    onChange={handleFileChange}
                                    accept="image/jpg, image/jpeg"
                                />
                            </div>
                        </div>
                    </div>

                    <form
                        className='w-full md:w-[60%]'
                        onSubmit={handleUpdateProfile}
                    >
                        <FormTextInput
                            label={'Address'}
                            padding={'px-5 py-2'}
                            name={'address'}
                            labelSize={'text-[12px]'}
                            handleChange={handleChange}
                            placeHolder={'Address'}
                            currentValue={formData.address}
                            classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                        />
                        <FormTextInput
                            name={'state'}
                            label={'State'}
                            padding={'px-5 py-2'}
                            labelSize={'text-[12px]'}
                            handleChange={handleChange}
                            currentValue={formData.state}
                            placeHolder={'State'}
                            classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                        />
                        <FormTextInput
                            name={'city_province'}
                            label={'City or Province'}
                            padding={'px-5 py-2'}
                            labelSize={'text-[12px]'}
                            handleChange={handleChange}
                            currentValue={formData.city_province}
                            placeHolder={'City or Province'}
                            classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                        />
                        <FormTextInput
                            type={'number'}
                            name={'contact_number'}
                            label={'Contact number'}
                            padding={'px-5 py-2'}
                            labelSize={'text-[12px]'}
                            handleChange={handleChange}
                            currentValue={formData.contact_number}
                            placeHolder={'Contact number'}
                            classes={'text-[14px] placeholder:text-[14px] rounded-md mb-'}
                        />
                        <div>
                            <Label
                                size={'text-[12px]'}
                                text={'About Hospital'}
                            />
                            <textarea
                                rows="6"
                                name="about_hospital"
                                onChange={handleChange}
                                value={formData.about_hospital}
                                className='px-2 py-2 border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-sky-600 focus:ring-blue resize-none overflow-y-auto scrollbar-4'
                            ></textarea>
                        </div>

                        <div className="mt-5">
                            {authRequestStatus === 'PENDING' ? (
                                <LoadingButtonOne
                                    loadingType={'one'}
                                    classes={'py-3 text-[14px] rounded-md bg-sky-600 w-full'}
                                />
                            ) : (
                                <CustomButton
                                    type={'submit'}
                                    title={'Update'}
                                    textColor={'text-white'}
                                    width={'w- w-full'}
                                    classes={'py-3 text-[12px] rounded-md bg-sky-600'}
                                />
                            )}
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Settings