export const validateAppointmentReschedule = (data) => {
    let message;

    if (!data.date) message = 'New date is required'

    if (!data.message) message = 'Message is required'

    return message
}

export const validateProcessDonation = (data) => {
    let message;

    if (!data.pints) message = 'Blood pints(quantity) is required'

    if (data.pints && data.pints === 0) message = 'Invalid blood pints(quantity) is required'

    if (!data.donationDate) message = 'Donation date is required'

    return message
}

export const validateGenerateComplaint = (data) => {
    let message;

    if (!data.title) message = 'Title is required'

    if (!data.message) message = 'Message is required'

    return message
}