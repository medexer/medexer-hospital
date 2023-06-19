import React from 'react'
import Lottie from 'lottie-react'

import { Animation7 } from '../../assets'


const PaymentInitializationModal = () => {
    return (
        <div className="fixed grid h-screen z-10 bg-[#ffffff60] place-items-center w-full backdrop-blur-sm">
            <div className=" w-[500px] px-[30px] py-[20px]">
            <div className="flex flex-col items-center h-[400px]">
                    <Lottie
                        loop={true}
                        className='h-full'
                        animationData={Animation7}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentInitializationModal
