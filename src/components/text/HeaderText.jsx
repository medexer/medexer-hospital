import React from 'react'


const HeaderText = ({ text, family, color, classes }) => {
    return (
        <h1
            className={`
                ${color}
                ${classes}
                ${family ? family : 'font-poppins'}
            `}
        >
            {text}
        </h1>
    )
}

export default HeaderText