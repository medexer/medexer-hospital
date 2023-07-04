/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { useGlobalState } from '../../state/context'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'


const MedicalHistoryDonorsTable = ({ data, updateConfig }) => {
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
                                        Donor ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Fullname
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Nationality
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' bg-white'>
                                {data?.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-[10px] text-gray-900 font-semibold pl-4 py-3 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            {item.donorID}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            {item.fullName}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            {item.email}
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {item.profile.nationality}
                                        </td>
                                        <td className="items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    updateConfig({ manageDonorHistory: true })
                                                    dispatch(hospitalResetStateProperty({ key: 'CurrentDonor', data: item }))
                                                }}
                                                className="bg-sky-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                Manage
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

export default MedicalHistoryDonorsTable
