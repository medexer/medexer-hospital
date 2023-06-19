import Lottie from 'lottie-react'
import { toast } from 'react-toastify'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Animation8 } from '../../assets'
import { hospitalGeneratePaymentHistory, hospitalVerifyPayment } from '../../state/redux/actions/hospital.actions'


const VerifyPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { paymentVerification } = useSelector(state => state.hospital)

    useEffect(() => {
        const ref = window.location.href

        const reference = ref.split('reference=')[1]

        dispatch(hospitalVerifyPayment({ reference, toast }))
    }, [])

    useEffect(() => {
        if (paymentVerification?.status == 'success') {
            const donationReference = localStorage.getItem('MDX-PAYMENT-DATA') ? JSON.parse(localStorage.getItem('MDX-PAYMENT-DATA')) : null

            console.log(donationReference)

            const formData = {
                amount_paid: (paymentVerification?.amount / 100),
                payment_date: paymentVerification?.paid_at?.slice(0, 10),
                payment_method: paymentVerification?.channel,
                payment_reference: paymentVerification?.reference,
                currency: paymentVerification?.currency,
                hospital: donationReference?.hospital,
                appointment: donationReference?.pkid,
            }

            console.log(formData)

            dispatch(hospitalGeneratePaymentHistory({ formData, toast, navigate }))
        }
    }, [paymentVerification])

    console.log(paymentVerification)

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <Lottie
                loop={true}
                className='h-full'
                animationData={Animation8}
            />
        </div>
    )
}

export default VerifyPayment