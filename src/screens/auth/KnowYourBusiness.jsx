import React, { useReducer } from 'react'
import { BsBuildingCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CustomButton, FormTextInput, HeaderText } from '../../components'


const KnowYourBusiness = () => {
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

                <div className="flex flex-col space-y-4 w-full px-4 py-5 border-b">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-[40%] flex space-x-1">
                            <HeaderText
                                classes={'text-[14px]'}
                                text={'CAC Registration number'}
                            />
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className="w-[80%]">
                            <FormTextInput
                                padding={'px-5 py-2.5'}
                                name={'hospitalName'}
                                handleChange={handleChange}
                                placeHolder={''}
                                classes={'text-[14px] placeholder:text-[14px] rounded-md mb-1 w-full'}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="w-[40%] flex space-x-1">
                            <HeaderText
                                classes={'text-[14px]'}
                                text={'Website URL'}
                            />
                        </div>
                        <div className="w-[80%]">
                            <FormTextInput
                                padding={'px-5 py-2.5'}
                                name={'hospitalName'}
                                handleChange={handleChange}
                                placeHolder={''}
                                classes={'text-[14px] placeholder:text-[14px] rounded-md mb-1 w-full'}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 w-full px-4 py-5 border-b">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-[40%] flex space-x-1">
                            <HeaderText
                                classes={'text-[14px]'}
                                text={'Logo'}
                            />
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className="w-[80%] border border-gray-300 rounded-md h-[80px] flex space-x-1 justify-center items-center text-[12px]">
                            <span className='text-sky-500 cursor-pointer'>Click to upload</span>
                            <p className='text-[12px]'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 w-full px-4 py-5 border-b">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-[40%] flex space-x-1">
                            <HeaderText
                                classes={'text-[14px]'}
                                text={'Address'}
                            />
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className="w-[80%]">
                            <FormTextInput
                                padding={'px-5 py-2.5'}
                                name={'hospitalName'}
                                handleChange={handleChange}
                                placeHolder={''}
                                classes={'text-[14px] placeholder:text-[14px] rounded-md mb-1 w-full'}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="w-[40%] flex space-x-1">
                            <HeaderText
                                classes={'text-[14px]'}
                                text={'Brief Description'}
                            />
                            <span className='text-red-500'>*</span>
                        </div>
                        <div className="w-[80%]">
                            <FormTextInput
                                padding={'px-5 py-2.5'}
                                name={'hospitalName'}
                                handleChange={handleChange}
                                placeHolder={''}
                                classes={'text-[14px] placeholder:text-[14px] rounded-md mb-1 w-full'}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-5 px-4">
                    <CustomButton
                        type={'button'}
                        title={'Cancel'}
                        handleClick={() => { }}
                        textColor={'text-black'}
                        width={'w-[49%] md:w-[49%]'}
                        classes={'py-3 text-[14px] rounded-md bg-white border'}
                    />
                    <CustomButton
                        type={'button'}
                        title={'Submit'}
                        handleClick={() => { }}
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