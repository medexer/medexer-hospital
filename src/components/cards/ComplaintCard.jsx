import React from 'react'
import { useDispatch } from 'react-redux'

import HeaderOne from '../text/HeaderOne'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'


const ComplaintCard = ({ complaint, config, updateConfig }) => {
    const dispatch = useDispatch()

    return (
        <div
            onClick={() => {
                console.log('[COMPLAINT-CARD-CLICK]')
                updateConfig({ showComplaint: true })
                dispatch(hospitalResetStateProperty({ key: 'CurrentComplaint', data: complaint }))
                console.log(`[COMPLAINT-CARD-CONFIG] :: ${config}`)
            }}
            className={`
                grid grid-cols-2 gap-2 bg-white shadow-sm shadow-gray-200 p-4 border cursor-pointer w-[350px] transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-slate-300 hover:shadow-md
                ${complaint.complaintStatus === 'OPENED' && 'border-green-200'}
                ${complaint.complaintStatus === 'IN PROGRESS' && 'border-purple-200'}
                ${complaint.complaintStatus === 'CLOSED' && 'border-red-200'}
            `}
        >
            <HeaderOne
                semibold={true}
                text={'Ticket ID'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.complaintNumber}</p>

            <HeaderOne
                semibold={true}
                text={'Subject'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.complaintSubject}</p>
            <HeaderOne
                semibold={true}
                text={'Status'}
                size={'text-[12px]'}
            />
            <p className={`
                text-[12px] font-medium
                ${complaint.complaintStatus === 'OPENED' && 'text-green-600'}
                ${complaint.complaintStatus === 'IN PROGRESS' && 'text-purple-600'}
                ${complaint.complaintStatus === 'CLOSED' && 'text-red-600'}
            `}
            >{complaint?.complaintStatus}</p>

            <HeaderOne
                semibold={true}
                text={'Date'}
                size={'text-[12px]'}
            />
            <p className='text-[12px]'>{complaint?.dateCreated?.slice(0, 10)}</p>
        </div>
    )
}

export default ComplaintCard