import React from "react"
import { useSelector } from "react-redux"

import LoadingToRedirect from "./LoadingToRedirect"


const PrivateRoute = ({ children, redirectTo }) => {
    const { user } = useSelector((state) => state.auth )
    
    return user ? children : <LoadingToRedirect path={redirectTo} />
}

export default PrivateRoute