import { Fragment } from "react"
import CreateComplaintModal from "../modals/CreateComplaintModal"

import DonationHistoryModal from "../modals/DonationHistoryModal"
import InventoryItemActivityModal from "../modals/InventoryItemActivityModal"
import ReadNotificationModal from "../modals/ReadNotificationModal"
import ReplyComplaintThreadModal from "../modals/ReplyComplaintThreadModal"
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

			{props.type === 'view__create__complaint__modal' && (
				<CreateComplaintModal />
			)}

			{props.type === 'view__reply__complaint__thread__modal' && (
				<ReplyComplaintThreadModal />
			)}

			{props.type === 'view__read__notification__modal' && (
				<ReadNotificationModal />
			)}

		</Fragment >
	)
}

export default FormModal