export const validateAppointmentReschedule = (data) => {
    let message;

    if (!data.date) message = 'New date is required'

    if (!data.message) message = 'Message is required'

    return message
}

export const validateGenerateComplaint = (data) => {
    let message;

    if (!data.title) message = 'Title is required'

    if (!data.message) message = 'Message is required'

    return message
}