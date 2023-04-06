import React from 'react'
import { FiCopy } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'


const CustomButton = ({ title, textColor, classes, iconType, width, type, handleClick }) => {
    return (
        <button
            className={`
                ${width}
                ${classes}
                ${textColor}
                flex items-center justify-center space-x-1
            `}
            type={type ? type : 'button'}
            onClick={handleClick ? handleClick : () => { }}
        >
            <span>{title}</span>
            {iconType === 'icon-right' && (
                <BsArrowRight
                    size={20}
                    className={`${textColor} cursor-pointer`}
                />
            )}
            {iconType === 'icon-copy' && (
                <FiCopy
                    size={18}
                    className={`${textColor} cursor-pointer`}
                />
            )}
            {iconType === 'icon-add' && (
                <IoMdAdd
                    size={18}
                    className={`${textColor} cursor-pointer`}
                />
            )}
        </button>
    )
}

export default CustomButton