import { IoIosArrowDown } from 'react-icons/io'
import React, { useEffect, useReducer, useState } from 'react'

import Label from '../text/Label'
import CountryCodes from '../../data/CountryCodes.json'


const FormPhoneInput = ({ classes, inputClasses, formData, name, handleChange, label, labelColor, labelSize, placeHolder, updateFormData }) => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        showDropDown: false
    })
    const [countryData, setCountryData] = useState({})

    useEffect(() => {
        setCountryData(CountryCodes.find(e => e.code === formData.countryCode))
    }, [formData.countryCode])

    return (
        <div>
            <Label
                text={label}
                size={labelSize}
                color={labelColor}
            />
            <div className={`
                ${classes}
                w-full flex items-center space-x-4 relative border border-gray-300 px-4
            `}
            >
                <div
                    onClick={() => updateConfig({ showDropDown: true })}
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <div className='text-[18px]'>{countryData.flag}</div>
                    <IoIosArrowDown className='text-white' />
                </div>

                <input
                    name={name}
                    type={"text"}
                    onChange={handleChange}
                    placeholder={placeHolder}
                    onClick={() => updateConfig({ showDropDown: false })}
                    className={`
                        ${inputClasses}
                        border border-white placeholder:text-[14px] text-white text-[14px] rounded w-full hover:outline-none focus:outline-none focus:border-white focus:ring-white
                    `}
                />

                {config.showDropDown && (
                    <div className="absolute left-0 top-0 w-[300px] max-h-[300px] bg-white flex flex-col overflow-y-auto scrollbar-4 px-6 py-4 shadow-lg">
                        {CountryCodes.map((country, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    updateConfig({ showDropDown: false })
                                    setCountryData(CountryCodes.find(e => e.code === country.code))
                                    updateFormData({ country: country.name, countryCode: country.code })
                                }}
                                className='flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all ease-in-out duration-500'
                            >
                                <p className='text-[20px]'>{country.flag}</p>
                                <p className='text-[14px]'>{country.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormPhoneInput