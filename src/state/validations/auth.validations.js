const emailPattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

export const validateHospitalSignin = (data) => {
    let message;

    if (!data.email) message = 'Hospital email is required'

    if (!data.hospitalID) message = 'Hospital ID is required'

    if (data.email && !emailPattern.test(data.email)) message = 'Invalid email address'

    return message
}

export const validateHospitalSignup = (data) => {
    let message;

    if (!data.hospitalName) message = 'Hospital name is required'

    if (!data.email) message = 'Hospital email is required'

    if (!data.location) message = 'Hospital location is required'

    if (!data.password) message = 'Password is required'

    if (data.password !== data.confirmPassword) message = 'Passwords do not match'

    if (data.email && !emailPattern.test(data.email)) message = 'Invalid email address'

    return message
}

export const validateHospitalKYBCapture = (data) => {
    let message;

    if (!data.cacRegistrationID) message = 'CAC registration ID is required'

    if (!data.address) message = 'Address is required'

    if (!data.description) message = 'Brief description is required'

    if (typeof(data.logo) !== 'object') message = 'Logo is required, use image/jpeg or image/jpg'

    return message
}

export const validateHospitalProfileUpdate = (data) => {
    let message;

    if (!data.hospitalName) message = 'Hospital name is required'

    if (!data.email) message = 'Hospital email is required'

    if (!data.currentPassword) message = 'Current password is required'

    if (!data.newPassword) message = 'New password is required'

    return message
}
