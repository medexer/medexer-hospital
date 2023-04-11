/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { IconBlood } from '../../assets'

import { useGlobalState } from '../../state/context'
import { hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'
import BloodGroupInfo from '../labels/BloodGroupInfo'
import BloodUnitInfo from '../labels/BloodUnitInfo'


const InventoryTable = ({ data, setCurrentPageFetch }) => {
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
                                        Blood Group
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 py-3 text-left"
                                    >
                                        Units
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
                                        Update
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
                                        <td className="flex items-center space-x-4 text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            <div className="p-2 rounded-md bg-slate-100">
                                                <img
                                                    alt=""
                                                    src={IconBlood}
                                                    className='w-[20px] rounded-full'
                                                />
                                            </div>
                                            <BloodGroupInfo
                                                bloodGroup={item.bloodGroup}
                                            />
                                        </td>
                                        <td className="text-sm text-gray-900 font-light py-3 whitespace-nowrap">
                                            <BloodUnitInfo
                                                units={item?.units}
                                            />
                                        </td>
                                        <td className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap">
                                            {item?.recentActivity}
                                        </td>
                                        <td className="items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    dispatch(hospitalResetStateProperty({ key: 'InventoryItem', data: item }))
                                                    updateModals({ showUpdateInventoryItemModal: !modals.showUpdateInventoryItemModal })
                                                }}
                                                className="bg-sky-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                Update
                                            </button>
                                        </td>
                                        <td className="items-center space-x-5 text-sm py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    dispatch(hospitalResetStateProperty({ key: 'InventoryItem', data: item }))
                                                    updateModals({ showInventoryItemHistoryModal: !modals.showInventoryItemHistoryModal })
                                                }}
                                                className="bg-sky-200 text-sky-600 text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                History
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

export default InventoryTable
