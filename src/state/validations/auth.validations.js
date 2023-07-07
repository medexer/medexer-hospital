const emailPattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
const passwordPattern = new RegExp(
    "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,60}$"
)

export const validateHospitalSignin = (data) => {
    let message;

    if (!data.email) message = 'Hospital email is required'

    if (!data.hospitalID) message = 'Hospital ID is required'

    if (!data.password) message = 'Password is required'

    if (data.email && !emailPattern.test(data.email)) message = 'Invalid email address'

    return message
}

export const validateHospitalForgotPassword = (data) => {
    let message;

    if (!data.email) message = 'Hospital email is required'

    if (!data.hospitalID) message = 'Hospital ID is required'

    if (data.email && !emailPattern.test(data.email)) message = 'Invalid email address'

    return message
}

export const validateHospitalResetPassword = (data) => {
    let message;

    if (!data.otp) message = 'OTP token is required'

    if (!data.newPassword) message = 'New password is required'

    if (!data.confirmNewPassword) message = 'Confirm password is required'

    if (data.newPassword !== data.confirmNewPassword) message = 'Passwords do not match'

    if (data.newPassword.length <= 7) message = 'Password must be at least 8 characters'

    if (!passwordPattern.test(data.newPassword)) message = 'Password must include a number, uppercase and lowercase alphabet'

    return message
}

export const validateHospitalSignup = (data) => {
    let message;

    if (!data.hospitalName) message = 'Hospital name is required'

    if (!data.email) message = 'Hospital email is required'

    if (!data.location) message = 'Hospital location is required'

    if (!data.password) message = 'Password is required'

    if (data.password !== data.confirmPassword) message = 'Passwords do not match'

    if (data.password.length <= 7) message = 'Password must be at least 8 characters'

    if (!passwordPattern.test(data.password)) message = 'Password must include a number, uppercase and lowercase alphabet'

    if (data.email && !emailPattern.test(data.email)) message = 'Invalid email address'

    return message
}

export const validateHospitalKYBCapture = (data) => {
    let message;

    // if (!data.business_type) message = 'Business type is required'

    // if (!data.incorporation_date) message = 'Business incorporation date is required'

    // if (!data.cacRegistrationID) message = 'Business registration ID is required'

    if (!data.address) message = 'Business address is required'

    if (!data.state) message = 'Business state is required'

    if (typeof (data.hospitalImage) !== 'object') message = 'Business image is required'

    if (!data.city_province) message = 'Business city/Province is required'

    // if (!data.description) message = 'Business description is required'

    // if (typeof (data.logo) !== 'object') message = 'Logo is required, use image/jpeg or image/jpg'

    return message
}

export const validateHospitalAuthDataUpdate = (data) => {
    let message;

    if (!data.hospitalName) message = 'Hospital name is required'

    if (!data.email) message = 'Hospital email is required'

    if (!data.currentPassword) message = 'Current password is required'

    if (!data.newPassword) message = 'New password is required'

    return message
}

export const validateHospitalProfileUpdate = (data) => {
    let message;

    if (!data.address) message = 'Hospital address is required'

    if (!data.state) message = 'State is required'

    if (!data.city_province) message = 'LGA/province is required'

    if (!data.contact_number) message = 'Contact number is required'

    if (!data.hospitalImage) message = 'Hospital image is required'

    // if (data.hospitalImage && typeof(data.hospitalImage) !== 'object') message = 'Invalid image'

    return message
}
