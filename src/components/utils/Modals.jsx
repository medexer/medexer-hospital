import React, { Fragment } from 'react'

import FormModal from './FormModal'
import { useGlobalState } from '../../state/context'


const Modals = () => {
    const { modals } = useGlobalState()

    return (
        <Fragment>
            {modals.showDonationHistoryModal && (
                <FormModal
                    type="view__donation__history__modal"
                />
            )}

            {modals.showRescheduleAppointmentModal && (
                <FormModal
                    type="view__reschedule__appointment__modal"
                />
            )}

            {modals.showUpdateInventoryItemModal && (
                <FormModal
                    type="view__update__inventory__item__modal"
                />
            )}

            {modals.showInventoryItemHistoryModal && (
                <FormModal
                    type="view__inventory__item__activity__modal"
                />
            )}

            {modals.showCreateComplaintModal && (
                <FormModal
                    type="view__create__complaint__modal"
                />
            )}

            {modals.showReplyComplaintThreadModal && (
                <FormModal
                    type="view__reply__complaint__thread__modal"
                />
            )}

            {modals.showReadNotificationModal && (
                <FormModal
                    type="view__read__notification__modal"
                />
            )}
        </Fragment>
    )
}

export default Modals