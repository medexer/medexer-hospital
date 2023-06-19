import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Signup, ForgotPassword, ResetPassword, NotFound, PrivateRoute, Dashboard, KnowYourBusiness, VerifyPayment, } from './screens'


const App = () => {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				{/* AUTH */}
				<Route path="/" element={<Login />} />
				<Route path="/kyb-capture" element={<KnowYourBusiness />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />

				{/* DASHBOARD */}
				<Route path="/dashboard" element={
					<PrivateRoute redirectTo={'/'}>
						<Dashboard />
					</PrivateRoute>
				} />

				{/* PUBLIC */}
				<Route path="/payment/verify" element={<VerifyPayment />} />

				{/* 404 */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
