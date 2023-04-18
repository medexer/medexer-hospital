import React from 'react'
import { useDispatch } from 'react-redux'

import HeaderOne from '../text/HeaderOne'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'


const ComplaintCard = ({ complaint, config, updateConfig }) => {
    const dispatch = useDispatch()

    return (
        <div
            onClick={() => {
                // console.log('[COMPLAINT-CARD-CLICK]')
                // console.log(`[COMPLAINT-CARD-CONFIG] :: ${config}`)

                updateConfig({ showComplaint: true })
                dispatch(hospitalResetStateProperty({ key: 'CurrentComplaint', data: complaint }))
            }}
            className={`
                grid grid-cols-2 gap-2 bg-white shadow-sm shadow-gray-300 p-4 border cursor-pointer w-[350px] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-md
                ${complaint?.status === 'CLOSED' && 'border-red-200'}
                ${complaint?.status === 'OPENED' && 'border-green-200'}
                ${complaint?.status === 'REOPENED' && 'border-yellow-200'}
                ${complaint?.status === 'IN_PROGRESS' && 'border-purple-200'}
            `}
        >
            <HeaderOne
                semibold={true}
                text={'Complaint ID'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.complaintID}</p>

            <HeaderOne
                semibold={true}
                text={'Subject'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.title}</p>
            <HeaderOne
                semibold={true}
                text={'Status'}
                size={'text-[12px]'}
            />
            <p className={`
                text-[12px] font-medium
                ${complaint?.status === 'CLOSED' && 'text-red-600'}
                ${complaint?.status === 'OPENED' && 'text-green-600'}
                ${complaint?.status === 'REOPENED' && 'text-yellow-400'}
                ${complaint?.status === 'IN_PROGRESS' && 'text-purple-600'}
            `}
            >{complaint?.status}</p>

            <HeaderOne
                semibold={true}
                text={'Date'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.created_at?.slice(0, 10)}</p>
        </div>
    )
}

export default ComplaintCard