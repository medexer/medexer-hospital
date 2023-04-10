import React, { Fragment } from 'react'

import FormModal from './FormModal'
import { useGlobalState } from '../../state/context'


const Modals = () => {
    const { modals } = useGlobalState()

    return (
        <Fragment>
            {modals.showRescheduleAppointmentModal && (
                <FormModal
                    type="view__reschedule__appointment__modal"
                />
            )}

        </Fragment>
    )
}

export default Modals