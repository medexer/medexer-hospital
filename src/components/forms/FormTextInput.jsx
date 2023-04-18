import React from 'react'
import { FiMail } from 'react-icons/fi'

import Label from '../text/Label'


const FormTextInput = ({ currentValue, classes, name, handleChange, label, labelColor, labelSize, padding, placeHolder, type, icon }) => {
    return (
        <div className='relative'>
            <Label
                text={label}
                size={labelSize}
                color={labelColor}
            />
            <input
                name={name}
                onChange={handleChange}
                placeholder={placeHolder}
                type={type ? type : "text"}
                value={currentValue && currentValue}
                className={`
                    ${classes} 
                    ${padding ? padding : 'px-5 py-4'} 
                    ${icon === 'mail' && 'pr-10'}
                    border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-sky-600 focus:ring-blue
                `}
            />

            {icon === 'mail' && (
                <FiMail
                    size={20}
                    className='absolute text-gray-400 right-6 top-4 cursor-pointer'
                />
            )}
        </div>
    )
}

export default FormTextInput