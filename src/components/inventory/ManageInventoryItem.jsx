import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Animation9 } from '../../assets'
import HeaderText from '../text/HeaderText'
import InventoryItemRecordTable from '../tables/InventoryItemRecordTable'
import { hospitalFetchInventoryItemRecord } from '../../state/redux/actions/hospital.actions'


const ManageInventoryItem = ({ updateConfig }) => {
	const dispatch = useDispatch()

	const { currentInventoryItem, inventoryItemRecord } = useSelector(state => state.hospital)

	useEffect(() => {
		dispatch(hospitalFetchInventoryItemRecord({ bloodGroup: currentInventoryItem?.bloodGroup }))
	}, [currentInventoryItem])

	console.log(inventoryItemRecord)
	return (
		<div className='w-full mb-5'>
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<HeaderText
						text={'Manage Inventory Item'}
						classes={'text-[14px] font-semibold'}
					/>
					<p className="text-[12px] text-gray-500">Manage blood pints and units available for blood {currentInventoryItem?.bloodGroup}</p>
				</div>

				<button
					type="submit"
					onClick={() => {
						updateConfig({ showInventoryItem: false })
					}}
					className="bg-primary rounded-md flex justify-center text-white text-[12px] py-2 font-medium px-2 hover:-translate-x-1 ease-in-out duration-700 transition-all focus:outline-none"
				>
					Back
				</button>
			</div>

			{inventoryItemRecord?.length > 0 && (
				<InventoryItemRecordTable
					data={inventoryItemRecord}
				/>
			)}

			{inventoryItemRecord?.length === 0 && (
				<div className="h-[300px] w-full">
					<Lottie
						loop={true}
						className='h-full'
						animationData={Animation9}
					/>
				</div>
			)}

		</div>
	)
}

export default ManageInventoryItem