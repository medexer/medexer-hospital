import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsBuildingCheck } from 'react-icons/bs'
import React, { useReducer, useRef } from 'react'

import { CustomButton, FormDateInput, FormSelectInput, FormTextAreaInput, FormTextInput, HeaderText } from '../../components'
import { authCaptureHospitalKYB } from '../../state/redux/actions/auth.actions'
import { validateHospitalKYBCapture } from '../../state/validations/auth.validations'


const KnowYourBusiness = () => {
    const fileRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showFormOne: true,
    })

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        hospitalImagePreview: '',
        logo: '', hospitalImage: '',
        address: '', description: '',
        state: '', city_province: '',
        cacRegistrationID: '', websiteUrl: '',
        incorporation_date: '', business_type: '',
    })

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value })
    }

    const handleFileChange = (e) => {
        if (e.target.files[0].size >= 500000) {
            toast.error('Please upload a file size less than 500kb')
        } else {
            updateFormData({ hospitalImage: e.target.files[0], hospitalImagePreview: URL.createObjectURL(e.target.files[0]) })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateHospitalKYBCapture(formData)
        if (message) return toast.error(message)

        dispatch(authCaptureHospitalKYB({ formData, toast, navigate }))
    }

    return (
        <div className='h-screen grid place-content-center overflow-y-hidden font-poppins bg-[url("src/assets/images/bg__1.png")] bg-cover'>
            <div className="w-[800px] shadow-xl flex flex-col py-4 bg-[#ffffff60] backdrop-blur-sm border rounded-md">
                <div className="flex items-center space-x-2 border-b px-4 pb-2">
                    <div className="p-2 border rounded-md">
                        <BsBuildingCheck
                            size={30}
                            className='text-gray-600'
                        />
                    </div>
                    <div className="flex flex-col">
                        <HeaderText
                            classes={'font-medium'}
                            text={'Upload KYB(Know Your Business)'}
                        />
                        <p className="text-[12px] text-gray-500">Please complete this form. It’ll only take in less than 5 minutes.</p>
                    </div>
                </div>

                {config.showFormOne && (
                    <div className="flex flex-col w-full px-4 py-3 space-y-3">
                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business Type'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormSelectInput
                                    items={['Blood Bank', 'Hospital/Medical Center', 'Donor Center', 'Plasma Collection Center', 'Research Institution/Laboratories',]}
                                    padding={'px-5 py-2.5'}
                                    name={'business_type'}
                                    handleChange={handleChange}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business Registration number'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormTextInput
                                    padding={'px-5 py-2.5'}
                                    name={'cacRegistrationID'}
                                    handleChange={handleChange}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business Incorporation Date'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormDateInput
                                    padding={'px-5 py-4'}
                                    name={'incorporation_date'}
                                    handleChange={handleChange}
                                    classes={'text-[12px] placeholder:text-[12px] py-2.5 px-5 rounded-md w-full'}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="w-[40%] flex space-x-1">
                                    <HeaderText
                                        classes={'text-[12px] font-semibold'}
                                        text={'Business Description'}
                                    />
                                    <span className='text-red-500'>*</span>
                                </div>
                                <div className="w-[80%]">
                                    <FormTextAreaInput
                                        rows={6}
                                        placeHolder={''}
                                        name={'description'}
                                        padding={'px-5 py-2.5'}
                                        handleChange={handleChange}
                                        classes={'text-[12px] placeholder:text-[12px] rounded-md w-full resize-none'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!config.showFormOne && (
                    <div className="flex flex-col space-y-4 w-full px-4 py-5 border-b">
                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business Cover Image'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>

                            <div className="w-[80%] flex justify-between">
                                <div
                                    onClick={() => fileRef.current.click()}
                                    className={` border flex flex-col cursor-pointer ${formData.hospitalImage ? 'border-sky-300 w-[50%]' : 'w-full border-gray-300'} rounded-md h-[80px] space-x-1 justify-center items-center text-[12px]`}
                                >
                                    <span className='text-sky-500'>Click to upload</span>
                                    <p className='text-[12px]'>JPG or JPEG (max. 200px)</p>
                                </div>

                                {formData.hospitalImage && (
                                    <div className="w-[50] h-[80px]">
                                        <img
                                            alt="image"
                                            className='w-full h-full object-cover'
                                            src={formData.hospitalImagePreview}
                                        />
                                    </div>
                                )}

                            </div>
                            <input
                                type="file"
                                ref={fileRef}
                                className='hidden'
                                onChange={handleFileChange}
                                accept='image/jpeg, image/jpg'
                            />
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business Address'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormTextInput
                                    padding={'px-5 py-2.5'}
                                    name={'address'}
                                    handleChange={handleChange}
                                    placeHolder={''}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md mb-1 w-full resize-none'}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business State'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormTextInput
                                    padding={'px-5 py-2.5'}
                                    name={'state'}
                                    handleChange={handleChange}
                                    placeHolder={''}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md mb-1 w-full resize-none'}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Business City/Province'}
                                />
                                <span className='text-red-500'>*</span>
                            </div>
                            <div className="w-[80%]">
                                <FormTextInput
                                    padding={'px-5 py-2.5'}
                                    name={'city_province'}
                                    handleChange={handleChange}
                                    placeHolder={''}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md mb-1 w-full resize-none'}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="w-[40%] flex space-x-1">
                                <HeaderText
                                    classes={'text-[12px] font-semibold'}
                                    text={'Website URL'}
                                />
                            </div>
                            <div className="w-[80%]">
                                <FormTextInput
                                    padding={'px-5 py-2.5'}
                                    name={'websiteUrl'}
                                    handleChange={handleChange}
                                    placeHolder={''}
                                    classes={'text-[12px] placeholder:text-[12px] rounded-md mb-1 w-full'}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center py-5 px-4">
                    <CustomButton
                        type={'button'}
                        title={`${config.showFormOne ? 'Cancel' : 'Previous'}`}
                        handleClick={() => {
                            if (!config.showFormOne) {
                                updateConfig({ showFormOne: true })
                            }
                        }}
                        textColor={'text-black'}
                        width={'w-[49%] md:w-[49%]'}
                        classes={'py-3 text-[14px] rounded-md bg-white border'}
                    />
                    <CustomButton
                        type={'button'}
                        title={`${config.showFormOne ? 'Next' : 'Submit'}`}
                        handleClick={(e) => {
                            if (config.showFormOne) {
                                if (!formData.business_type) return toast.error('Business type is required')

                                if (!formData.incorporation_date) return toast.error('Business incorporation date is required')

                                if (!formData.cacRegistrationID) return toast.error('Business registration ID is required')

                                if (!formData.description) return toast.error('Business description is required')

                                updateConfig({ showFormOne: false })
                            } else {
                                handleSubmit(e)
                            }
                        }}
                        textColor={'text-white'}
                        width={'w-[49%] md:w-[49%]'}
                        classes={'py-3 text-[14px] rounded-md bg-sky-600 border'}
                    />
                </div>
            </div>
        </div>
    )
}

export default KnowYourBusiness