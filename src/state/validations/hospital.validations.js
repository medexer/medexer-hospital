export const validateAppointmentReschedule = (data) => {
    let message;

    if (!data.date) message = 'New date is required'

    if (!data.message) message = 'Message is required'

    return message
}