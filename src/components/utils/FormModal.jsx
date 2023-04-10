import { Fragment } from "react"

import RescheduleAppointmentModal from "../modals/RescheduleAppointmentModal"


const FormModal = (props) => {
	return (
		<Fragment>
			{props.type === 'view__reschedule__appointment__modal' && (
				<RescheduleAppointmentModal />
			)}

		</Fragment >
	)
}

export default FormModal