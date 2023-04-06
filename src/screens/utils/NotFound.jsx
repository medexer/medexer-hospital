import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Animation1 } from '../../assets'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 5000)
    }, [])

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-graient-to-r to-primary from-primary-light">
            <div className="h-[50%]">
                <Lottie
                    loop={true}
                    animationData={Animation1}
                />
            </div>
        </div>
    )
}

export default NotFound