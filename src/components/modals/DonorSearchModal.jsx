import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeMap from '../maps/HomeMap'
import ModalHeader from './ModalHeader'
import HeaderOne from '../text/HeaderOne'
import { useGlobalState } from '../../state/context'
import { hospitalResetStateProperty, hospitalSearchDonors } from '../../state/redux/actions/hospital.actions'


const DonorSearchModal = () => {
    const dispatch = useDispatch()


    const { modals, updateModals } = useGlobalState()

    return (
        <div className="fixed grid h-screen z-10 bg-[#11111190] place-items-center w-full backdrop-blur-sm">
            <div className="bg-[#ffffff60] w-full h-screen">
                <div className="relative flex flex-col justify-between items-center px-[30px] ">

                    <div className="absolute top-5 right-5 z-[5]">

                    </div>

                    <div className="absolute flex justify-between items-center bg-white z-[5] w-full shadow-lg shadow-slate-400 px-10 py-3">
                        <div
                            disabled
                            className="text-[12px] uppercase text-red-600 font-medium cursor-pointer opacity-0"
                            onClick={() => {
                                dispatch(hospitalResetStateProperty({ key: 'Reset-Search-Results', data: null }))
                            }}
                        >Reset</div>
                        <input
                            type="text"
                            // id="search__input"
                            onChange={(e) => {
                                if (e.target.value === '') return
                                if (e.target.value.length <= 1) return

                                dispatch(hospitalSearchDonors({ query: e.target.value }))
                            }}
                            placeholder='Search by donor name, state, city or blood group'
                            className="outline-none ring-[1.5px] ring-red-300 w-[600px] focus:ring-red-500 px-10 py-2 rounded-md placeholder:font-normal placeholder:text-[12px] text-[12px] transition-all duration-500"
                        />

                        {/* <ModalHeader
                            classes={'rounded-full'}
                            modalHandler={() => {
                                updateModals({ showDonorSearchModal: !modals.showDonorSearchModal })
                                dispatch(hospitalResetStateProperty({ key: 'Reset-Search-Results', data: null }))
                            }}
                        /> */}
                        <div
                            disabled
                            className="text-[12px] uppercase text-red-600 font-medium cursor-pointer p-2 "
                            onClick={() => {
                                updateModals({ showDonorSearchModal: !modals.showDonorSearchModal })
                                dispatch(hospitalResetStateProperty({ key: 'Reset-Search-Results', data: null }))
                            }}
                        >Close</div>
                    </div>
                </div>

                <HomeMap />
            </div>
        </div>
    )
}

export default DonorSearchModal