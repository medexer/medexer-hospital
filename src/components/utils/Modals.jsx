import React, { Fragment } from 'react'

import FormModal from './FormModal'
import { useGlobalState } from '../../state/context'


const Modals = () => {
    const { modals } = useGlobalState()

    return (
        <Fragment>
            {modals.showAdminViewOrganizationModal && (
                <FormModal
                    type="admin__vieworganization__modal"
                />
            )}

        </Fragment>
    )
}

export default Modals