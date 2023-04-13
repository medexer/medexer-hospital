import React, { useReducer } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'

import Label from '../text/Label'


const FormPasswordInput = ({ classes, name, handleChange, label, labelColor, labelSize, padding, placeHolder, showIcon = true }) => {
    const [config, updateConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        hidePassword: true
    })

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
                type={config.hidePassword ? 'password' : 'text'}
                className={`
                    ${classes} 
                    ${padding ? padding : 'px-5 py-4'} 
                    border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-sky-600 focus:ring-blue
                `}
            />

            {!config.hidePassword && showIcon && (
                <BsEyeSlash
                    size={18}
                    className={`absolute right-6 top-10 cursor-pointer ${config.hidePassword ? 'text-gray-600' : 'text-gray-400'}`}
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}

            {config.hidePassword && showIcon && (
                <BsEye
                    size={18}
                    className={`absolute right-6 top-10 cursor-pointer ${config.hidePassword ? 'text-gray-600' : 'text-gray-400'}`}
                    onClick={() => updateConfig({ hidePassword: !config.hidePassword })}
                />
            )}
        </div>
    )
}

export default FormPasswordInput