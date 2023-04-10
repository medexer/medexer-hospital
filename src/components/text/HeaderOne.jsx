import React from 'react'

const HeaderOne = ({ text, color, align, size, bold, semibold }) => (
    <h1 className={`${size ? size : 'text-[20px]'} ${!semibold && !bold && 'font-normal'} ${semibold && 'font-semibold'} ${bold && 'font-bold'} ${align ? align : ''} ${color && color}`}>{text}</h1>
)


export default HeaderOne