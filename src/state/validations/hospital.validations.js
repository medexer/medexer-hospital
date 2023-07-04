export const validateAddMedicalHistory = (data) => {
    let message;

    if (!data.hiv) message = 'HIV 1/2 status is required'

    if (!data.vdrl) message = 'VDRL status is required'

    if (!data.pcv) message = 'PCV count is required'

    if (!data.hepatitisB) message = 'Hepatitis B status is required'

    if (!data.hepatitisC) message = 'Hepatitis C status is required'

    if (!data.bloodPressure) message = 'Blood pressure status is required'

    if (!data.bodyTemperature) message = 'Body temperature status is required'

    if (!data.height) message = 'Height is required'

    if (!data.weight) message = 'Weight is required'

    if (!data.genotype) message = 'Genotype is required'

    if (!data.bloodGroup) message = 'Blood group is required'

    return message
}

export const validateAppointmentReschedule = (data) => {
    let message;

    if (!data.date) message = 'New date is required'

    if (!data.message) message = 'Message is required'

    return message
}

export const validateProcessDonation = (data) => {
    let message;

    if (!data.pints) message = 'Blood pints(quantity) is required'

    if (!data.bloodGroup) message = 'Blood group is required'

    if (data.bloodGroup && !['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].includes(data.bloodGroup)) message = 'Invalid blood group'

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