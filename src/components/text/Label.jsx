import React from 'react'


const Label = ({ text, size, color }) => {
    return (
        <label className={`${size ? size : 'text-[10px]'} ${color}`}>{text}</label>
    )
}

export default Label