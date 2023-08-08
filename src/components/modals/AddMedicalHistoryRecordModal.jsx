import { toast } from 'react-toastify'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import FormTextInput from '../forms/FormTextInput'
import { useGlobalState } from '../../state/context'
import FormSelectInput from '../forms/FormSelectInput'
import { validateAddMedicalHistory } from '../../state/validations/hospital.validations'
import { hospitalFetchRecentDonorAppointments, hospitalAddDonorMedicalHistory } from '../../state/redux/actions/hospital.actions'
import LoadingButtonOne from '../buttons/LoadingButtonOne'


const AddMedicalHistoryRecordModal = () => {
    const dispatch = useDispatch()

    const { updateModals } = useGlobalState()
    const { currentDonor, recentAppointments, hospitalRequestStatus } = useSelector(state => state.hospital)

    const [formData, updateFormData] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        donor: 0, appointment: 0,
        currentAppointment: '', pcv: '', hiv: '', vdrl: '',
        hepatitisB: '', hepatitisC: '', bloodPressure: '', height: '',
        bodyTemperature: '', bloodGroup: '', genotype: '', weight: '',
    })

    useEffect(() => {
        dispatch(hospitalFetchRecentDonorAppointments({ donor: currentDonor?.pkid }))
    }, [])

    useEffect(() => {
        if (formData.appointment) {
            const index = recentAppointments?.findIndex(app => app.pkid === parseInt(formData.appointment))
            updateFormData({ currentAppointment: recentAppointments[index] })

            console.log(formData)
        }
    }, [formData.appointment])

    useEffect(() => {
        if (currentDonor) {
            updateFormData({
                donor: currentDonor?.pkid,
            })
        }
    }, [currentDonor])

    const handleChange = (e) => {
        updateFormData({ [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const message = validateAddMedicalHistory(formData)
        if (message) return toast.error(message)
        console.log(formData)

        dispatch(hospitalAddDonorMedicalHistory({ formData, toast, updateModals }))
    }

    console.log(currentDonor)
    console.log(recentAppointments)
    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[700px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-sky-600'}
                        text={`Add Medical Test Record`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showAddMedicalHistoryModal: false })}
                    />
                </div>

                <div className="my-2 flex items-center space-x-5 w-full py-3 border-b border-b-red-300">
                    {/* <img
                        alt="avatar"
                        src={`${currentDonor?.profile?.userAvatar}`}
                        className='rounded-md w-[160px] h-[120px]'
                    /> */}
                    <div className="flex flex-col w-full">
                        <p className="text-[14px] font-medium">{currentDonor?.donorID}</p>
                        <div className="flex justify-between w-full">
                            <p className="text-[12px]">Appointment: {formData?.currentAppointment?.appointmentID}</p>
                            <p className="text-[12px]">Donation Date: {formData?.currentAppointment?.donationDate}</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between w-full">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Appointment'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <select
                                name="appointment"
                                onChange={handleChange}
                                className={`w-full py-2 px-5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-[12px] placeholder:text-[12px]`}
                            >
                                <option value="">-</option>
                                {recentAppointments?.map((appointment, index) => (
                                    <option
                                        key={index}
                                        value={appointment?.pkid}
                                        className='text-[12px] placeholder:text-[12px]'
                                    >{appointment?.appointmentID}</option>
                                ))}
                            </select>
                        </div>

                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'PCV (Packed Cell Volume)'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormTextInput
                                showLabel={false}
                                name={'pcv'}
                                padding={'py-2.5 px-4'}
                                handleChange={handleChange}
                                placeHolder={'PCV'}
                                classes={'text-[12px] placeholder:text-[12px] mt-0 rounded-md py-1 bg-[#ffffff30] backdrop-blur-sm border'}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-1">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'HIV 1/2'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                name={'hiv'}
                                showLabel={false}
                                padding={'px-5 py-2.5'}
                                label={'Hiv 1/2 status'}
                                handleChange={handleChange}
                                items={['Active', 'Non-Active']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'VDRL'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                name={'vdrl'}
                                showLabel={false}
                                padding={'px-5 py-2.5'}
                                label={'VDRL status'}
                                handleChange={handleChange}
                                items={['Active', 'Non-Active']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-1">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Hepatitis B'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                name={'hepatitisB'}
                                showLabel={false}
                                padding={'px-5 py-2.5'}
                                label={'Hepatitis B status'}
                                handleChange={handleChange}
                                items={['Active', 'Non-Active']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Hepatitis C'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                name={'hepatitisC'}
                                showLabel={false}
                                padding={'px-5 py-2.5'}
                                label={'Hepatitis C status'}
                                handleChange={handleChange}
                                items={['Active', 'Non-Active']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-1">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Blood Pressure'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormTextInput
                                showLabel={false}
                                name={'bloodPressure'}
                                padding={'py-2.5 px-4'}
                                label={'Blood Pressure'}
                                handleChange={handleChange}
                                placeHolder={'Blood Pressure'}
                                classes={'text-[12px] placeholder:text-[12px] mt-0 rounded-md py-1 bg-[#ffffff30] backdrop-blur-sm border'}
                            />
                        </div>
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Body Temperature'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormTextInput
                                showLabel={false}
                                padding={'py-2.5 px-4'}
                                name={'bodyTemperature'}
                                label={'Body Temperature'}
                                handleChange={handleChange}
                                placeHolder={'Body Temperature'}
                                classes={'text-[12px] placeholder:text-[12px] mt-0 rounded-md py-1 bg-[#ffffff30] backdrop-blur-sm border'}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between w-full mt-1">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Blood Group'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                showLabel={false}
                                name={'bloodGroup'}
                                label={'Blood group'}
                                padding={'px-5 py-2.5'}
                                handleChange={handleChange}
                                items={['A+', 'A-', 'B-', 'B+', 'AB+', 'AB-', 'O+', 'O-']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Genotype'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormSelectInput
                                showLabel={false}
                                name={'genotype'}
                                label={'Genotype'}
                                padding={'px-5 py-2.5'}
                                handleChange={handleChange}
                                items={['AA', 'AS', 'SS']}
                                classes={'text-[12px] placeholder:text-[12px] rounded-md w-full'}
                            />
                        </div>
                    </div>


                    <div className="flex justify-between w-full mt-1">
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Weight'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormTextInput
                                showLabel={false}
                                name={'weight'}
                                padding={'py-2.5 px-4'}
                                handleChange={handleChange}
                                placeHolder={'Weight'}
                                classes={'text-[12px] placeholder:text-[12px] mt-0 rounded-md py-1 bg-[#ffffff30] backdrop-blur-sm border'}
                            />
                        </div>
                        <div className='w-[49%]'>
                            <div className="flex items-center ">
                                <Label text={'Height'} size={'text-[12px]'} />
                                <span className='text-red-500'>*</span>
                            </div>
                            <FormTextInput
                                name={'height'}
                                showLabel={false}
                                padding={'py-2.5 px-4'}
                                handleChange={handleChange}
                                placeHolder={'Height'}
                                classes={'text-[12px] placeholder:text-[12px] mt-0 rounded-md py-1 bg-[#ffffff30] backdrop-blur-sm border'}
                            />
                        </div>
                    </div>

                    {hospitalRequestStatus === 'PENDING' ? (
                        <LoadingButtonOne
                            loadingType={'one'}
                            classes={'py-2 text-[14px] rounded-md bg-sky-600 w-full mt-4'}
                        />
                    ) : (
                        <button
                            disabled={!formData?.currentAppointment?.donationDate}
                            type="submit"
                            className="w-full mt-4 bg-sky-600 rounded text-white text-[12px] py-2 px-6 hover:-translate-y-[2px] ease-in-out duration-700 transition-all focus:outline-none"
                        >
                            Submit
                        </button>
                    )}
                </form>

            </div>
        </div>
    )
}

export default AddMedicalHistoryRecordModal