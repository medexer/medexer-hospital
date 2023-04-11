import { Fragment } from "react"

import DonationHistoryModal from "../modals/DonationHistoryModal"
import InventoryItemActivityModal from "../modals/InventoryItemActivityModal"
import RescheduleAppointmentModal from "../modals/RescheduleAppointmentModal"
import UpdateInventoryItemModal from "../modals/UpdateInventoryItemModal"


const FormModal = (props) => {
	return (
		<Fragment>
			{props.type === 'view__donation__history__modal' && (
				<DonationHistoryModal />
			)}

			{props.type === 'view__reschedule__appointment__modal' && (
				<RescheduleAppointmentModal />
			)}

			{props.type === 'view__update__inventory__item__modal' && (
				<UpdateInventoryItemModal />
			)}

			{props.type === 'view__inventory__item__activity__modal' && (
				<InventoryItemActivityModal />
			)}

		</Fragment >
	)
}

export default FormModal