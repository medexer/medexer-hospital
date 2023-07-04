import React, { useRef } from 'react'

import Label from '../text/Label'


const FormDateInput = ({ classes, name, handleChange, label, padding }) => {
    const dateRef = useRef(null)

    return (
        <div
            className='relative cursor-pointer'
            onClick={() => dateRef.current.click()}
        >
            <Label text={label} />

            <input
                name={name}
                ref={dateRef}
                type={"date"}
                onChange={handleChange}
                id='date'
                // padding={padding ? padding : 'px-5 py-3'}
                className={`
                    ${classes}
                    border border-gray-300 placeholder:text-[12px] text-[12px] rounded w-full hover:outline-none focus:outline-none focus:border-gray-600 focus:ring-blue
                `}
            />

            {/* <BsCalendar2Date
                size={20}
                className='absolute text-gray-400 right-6 top-4 cursor-pointer'
            /> */}
        </div>
    )
}

export default FormDateInput