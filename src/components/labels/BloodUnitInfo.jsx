import React from 'react'


const BloodUnitInfo = ({ units }) => {
    return (
        <div>
            <p className='font-medium'>{units} Pints</p>
            <p className='font-medium text-gray-400 text-[10px]'>
                {units * 473.18} ml
            </p>
        </div>
    )
}

export default BloodUnitInfo