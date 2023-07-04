import { Fragment } from "react"
import CreateComplaintModal from "../modals/CreateComplaintModal"

import DonationHistoryModal from "../modals/DonationHistoryModal"
import InventoryItemActivityModal from "../modals/InventoryItemActivityModal"
import ReadNotificationModal from "../modals/ReadNotificationModal"
import ReplyComplaintThreadModal from "../modals/ReplyComplaintThreadModal"
import RescheduleAppointmentModal from "../modals/RescheduleAppointmentModal"
import UpdateInventoryItemModal from "../modals/UpdateInventoryItemModal"
import ProcessDonationModal from "../modals/ProcessDonationModal"
import PaymentInitializationModal from "../modals/PaymentInitializationModal"
import DonorProfileModal from "../modals/DonorProfileModal"
import DonorSearchModal from "../modals/DonorSearchModal"
import AddMedicalHistoryRecordModal from "../modals/AddMedicalHistoryRecordModal"
import ViewMedicalHistoryItemModal from "../modals/ViewMedicalHistoryItemModal"


const FormModal = (props) => {
	return (
		<Fragment>
			{props.type === 'view__payment__initialization__modal' && (
				<PaymentInitializationModal />
			)}

			{props.type === 'view__search__donor__modal' && (
				<DonorSearchModal />
			)}

			{props.type === 'view__add__medicalhistory__modal' && (
				<AddMedicalHistoryRecordModal />
			)}

			{props.type === 'view__add__medicalhistory__modal' && (
				<AddMedicalHistoryRecordModal />
			)}

			{props.type === 'view__medicalhistory__item__modal' && (
				<ViewMedicalHistoryItemModal />
			)}

			{props.type === 'view__donation__history__modal' && (
				<DonationHistoryModal />
			)}

			{props.type === 'view__donor__profile__modal' && (
				<DonorProfileModal />
			)}

			{props.type === 'view__reschedule__appointment__modal' && (
				<RescheduleAppointmentModal />
			)}

			{props.type === 'view__process__donation__modal' && (
				<ProcessDonationModal />
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