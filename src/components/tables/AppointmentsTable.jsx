/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { GoPencil } from 'react-icons/go'
import { IoMdTrash } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import { useGlobalState } from '../../state/context'


const AppointmentsTable = ({ data, setCurrentPageFetch }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()

    return (
        <div className="flex justify-between items-center w-full mt-5 font-poppins">
            <div className="flex flex-col w-full">
                <div className="space-y-1">
                    <Fragment>
                        <table className="w-full cursor-default">
                            <thead className=" bg-slate-100 rounded-md">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 pl-4 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Donor
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Blood Group
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Recent Activity
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' bg-white'>
                                {data?.map((donor, index) => (
                                    <tr key={index}>
                                        <td className="text-[10px] text-gray-900 font-semibold pl-4 py-3 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="flex items-center space-x-4 text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            <div className="p-2 rounded-md bg-slate-100">
                                                <img
                                                    alt=""
                                                    src={donor.avatar}
                                                    className='w-[40px] rounded-full'
                                                />
                                            </div>
                                            <div>
                                                <p className='font-medium'>{donor?.name}</p>
                                                <p className='font-medium text-gray-400 text-[12px]'>{donor.gender}</p>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            {donor?.bloodGroup}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            {donor?.date.slice(0, 10)}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {donor?.recentActivity}
                                        </td>
                                        <td className="items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                }}
                                                className="bg-sky-200 text-sky-600 text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                History
                                            </button>
                                        </td>
                                        <td className="items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    updateModals({ showRescheduleAppointmentModal: !modals.showRescheduleAppointmentModal })
                                                }}
                                                className="bg-sky-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                Reschedule
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* <PagePagination
                            data={totalPages}
                            setCurrentPageFetch={setCurrentPageFetch}
                        /> */}
                    </Fragment>
                </div>
            </div>
        </div >
    )
}

export default AppointmentsTable
