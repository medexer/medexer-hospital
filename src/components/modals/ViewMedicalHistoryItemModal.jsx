import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Label from '../text/Label'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { UserAvatar1 } from '../../assets'
import { useGlobalState } from '../../state/context'


const ViewMedicalHistoryItemModal = () => {
    const { modals, updateModals } = useGlobalState()
    const { currentMedicalHistory } = useSelector(state => state.hospital)

    console.log(currentMedicalHistory)

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-white rounded-md w-[600px] px-[30px] py-[20px]">
                <div className="flex justify-between items-center">
                    <HeaderOne
                        semibold={true}
                        size={'text-[14px]'}
                        color={'text-slate-800'}
                        text={`Medical History`}
                    />

                    <ModalHeader
                        modalHandler={() => updateModals({ showViewMedicalHistoryModal: !modals.showViewMedicalHistoryModal })}
                    />
                </div>

                <div className='mt-4 flex flex-col space-y-5 items-start w-full'>
                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'Blood Group'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.bloodGroup}</p>
                        </div>
                        <div className="flex flex-col">
                            <Label text={'Genotype'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.genotype}</p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'HIV 1/2'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.hiv}</p>
                        </div>
                        <div className="flex flex-col">
                            <Label text={'VDRL'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.vdrl}</p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'Hepatits B'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.hepatitisB}</p>
                        </div>
                        <div className="flex flex-col">
                            <Label text={'Hepatits C'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.hepatitisC}</p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'Blood Pressure'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.bloodPressure}</p>
                        </div>
                        <div className="flex flex-col">
                            <Label text={'Body Temperature'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.bodyTemperature}</p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'Weight'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.weight}</p>
                        </div>
                        <div className="flex flex-col">
                            <Label text={'Height'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.height}</p>
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-center border-b">
                        <div className="flex flex-col">
                            <Label text={'PCV'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.pcv}</p>
                        </div>
                        {/* <div className="flex flex-col">
                            <Label text={'Height'} size={'text-[14px] font-semibol text-sky-600'} />
                            <p className="text-[13px] font-medium">{currentMedicalHistory?.height}</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewMedicalHistoryItemModal