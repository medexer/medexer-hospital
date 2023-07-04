import React, { Fragment } from 'react'

import FormModal from './FormModal'
import { useGlobalState } from '../../state/context'


const Modals = () => {
    const { modals } = useGlobalState()

    return (
        <Fragment>
            {modals.showPaymentInitializationModal && (
                <FormModal
                    type="view__payment__initialization__modal"
                />
            )}

            {modals.showDonorSearchModal && (
                <FormModal
                    type="view__search__donor__modal"
                />
            )}

            {modals.showAddMedicalHistoryModal && (
                <FormModal
                    type="view__add__medicalhistory__modal"
                />
            )}

            {modals.showViewMedicalHistoryModal && (
                <FormModal
                    type="view__medicalhistory__item__modal"
                />
            )}

            {modals.showDonationHistoryModal && (
                <FormModal
                    type="view__donation__history__modal"
                />
            )}

            {modals.showDonorProfileModal && (
                <FormModal
                    type="view__donor__profile__modal"
                />
            )}

            {modals.showProcessDonationModal && (
                <FormModal
                    type="view__process__donation__modal"
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