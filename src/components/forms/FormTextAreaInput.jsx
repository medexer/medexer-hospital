import React from 'react'


const FormTextAreaInput = ({ rows, currentValue, classes, name, handleChange, padding, placeHolder }) => {
    return (
        <textarea
            type="text"
            rows={rows}
            name={name}
            onChange={handleChange}
            placeholder={placeHolder}
            value={currentValue && currentValue}
            className={`
                ${classes} 
                ${padding ? padding : 'px-5 py-4'} 
                border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-sky-600 focus:ring-blue scrollbar-4
            `}
        ></textarea>
    )
}

export default FormTextAreaInput