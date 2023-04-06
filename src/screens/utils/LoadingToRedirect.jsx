import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LoadingToRedirect = ({ path }) => {
	const navigate = useNavigate()
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((currentCount) => --currentCount)
		},)

		count === 0 && navigate(path, { replace: true })
		return () => clearInterval(interval)
	}, [count, navigate])
	return null
}

export default LoadingToRedirect