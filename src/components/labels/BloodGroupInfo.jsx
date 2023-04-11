import React from 'react'


const BloodGroupInfo = ({ bloodGroup }) => {
    return (
        <div>
            <p className='font-semibold text-[12px]'>{bloodGroup}</p>
            <p className='text-gray-400 text-[12px]'>
                { bloodGroup === 'O+' && 'Rhesus O Positive'}
                { bloodGroup === 'AB+' && 'Rhesus AB Positive'}
                { bloodGroup === 'A+' && 'Rhesus A Positive'}
                { bloodGroup === 'B+' && 'Rhesus B Positive'}
                { bloodGroup === 'O-' && 'Rhesus O Negative'}
                { bloodGroup === 'AB-' && 'Rhesus AB Negative'}
                { bloodGroup === 'A-' && 'Rhesus A Negative'}
                { bloodGroup === 'B-' && 'Rhesus B Negative'}
            </p>
        </div>
    )
}

export default BloodGroupInfo