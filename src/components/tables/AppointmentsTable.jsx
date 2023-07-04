/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UserAvatar1 } from '../../assets'
import { useGlobalState } from '../../state/context'
import BloodGroupInfo from '../labels/BloodGroupInfo'
import { hospitalInitializePayment, hospitalResetStateProperty } from '../../state/redux/actions/hospital.actions'


const AppointmentsTable = ({ data }) => {
    const dispatch = useDispatch()

    const { modals, updateModals } = useGlobalState()
    const { paymentConfiguration } = useSelector(state => state.hospital)

    useEffect(() => {
        if (paymentConfiguration) {
            window.location.href = paymentConfiguration?.authorization_url
        }
    }, [paymentConfiguration])

    console.log(paymentConfiguration)

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
                                        className="text-[12px] font-medium text-gray-900 pl-4 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >
                                        Donor ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >
                                        Blood Group
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >
                                        Recent Activity
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                    <th
                                        scope="col"
                                        className="text-[12px] font-medium text-gray-900 py-3 text-left"
                                    >

                                    </th>
                                </tr>
                            </thead>
                            <tbody className=' bg-white'>
                                {data?.map((appointment, index) => (
                                    <tr key={index} className='border-b'>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="text-[10px] text-gray-900 font-semibold pl-4 py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="flex items-center space-x-4 text-[12px] text-gray-900 font-light py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            <div className="p-2 rounded-md bg-slate-100">
                                                <img
                                                    alt=""
                                                    src={UserAvatar1}
                                                    className='w-[40px] rounded-full'
                                                />
                                            </div>
                                            <div>
                                                <p className='font-medium'>{appointment?.donorInfo?.fullName}</p>
                                                <p className='font-medium text-gray-400 text-[12px]'>{appointment?.donorInfo?.gender ? appointment?.donorInfo?.gender : 'Male'}</p>
                                            </div>
                                        </td>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            {appointment?.donorInfo?.donorId}
                                        </td>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            <BloodGroupInfo
                                                bloodGroup={appointment?.donorInfo?.bloodGroup}
                                            />
                                        </td>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            {appointment?.date?.slice(0, 10)}
                                        </td>
                                        <td
                                            onClick={() => {
                                                dispatch(hospitalResetStateProperty({ key: 'DonorProfile', data: appointment?.donorInfo }))
                                                updateModals({ showDonorProfileModal: !modals.showDonorProfileModal })
                                            }}
                                            className="text-[12px] text-gray-900 font-light py-3 whitespace-nowrap cursor-pointer"
                                        >
                                            {appointment?.recentActivity}
                                        </td>
                                        <td className="items-center space-x-5 text-[12px] py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    dispatch(hospitalResetStateProperty({ key: 'Appointment', data: appointment }))
                                                    updateModals({ showDonationHistoryModal: !modals.showDonationHistoryModal })
                                                }}
                                                className="bg-sky-200 text-sky-600 text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                History
                                            </button>
                                        </td>
                                        <td className="items-center space-x-5 text-[12px] py-3 text-gray-900 font-light whitespace-nowrap">
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    dispatch(hospitalResetStateProperty({ key: 'Appointment', data: appointment }))
                                                    updateModals({ showRescheduleAppointmentModal: !modals.showRescheduleAppointmentModal })
                                                }}
                                                className="bg-sky-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                            >
                                                Reschedule
                                            </button>
                                        </td>
                                        <td className="items-center space-x-5 text-[12px] py-3 text-gray-900 font-light whitespace-nowrap">
                                            {!appointment.isDonated && (
                                                <button
                                                    type="submit"
                                                    disabled={appointment?.date?.slice(0, 10) !== new Date().toISOString().slice(0, 10)}
                                                    onClick={() => {
                                                        updateModals({ showProcessDonationModal: true })
                                                        dispatch(hospitalResetStateProperty({ key: 'Appointment', data: appointment }))
                                                    }}
                                                    className="bg-teal-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                                >
                                                    Process
                                                </button>
                                            )}
                                            {appointment.isDonated && (
                                                <button
                                                    type="submit"
                                                    onClick={() => {
                                                        updateModals({ showPaymentInitializationModal: true })
                                                        dispatch(hospitalInitializePayment({ formData: appointment, toast, updateModals }))
                                                    }}
                                                    className="bg-teal-600 text-white text-[12px] font-medium py-1 px-4 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none rounded"
                                                >
                                                    Process Payment
                                                </button>
                                            )}
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
