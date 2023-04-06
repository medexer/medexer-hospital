import React from 'react'


const Label = ({ text, size }) => {
    return (
        <label className={`${size ? size : 'text-[10px]'}`}>{text}</label>
    )
}

export default Label