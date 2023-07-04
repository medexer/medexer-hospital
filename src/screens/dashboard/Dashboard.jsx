import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IconSearch } from '../../assets'
import { useGlobalState } from '../../state/context'
import { Modals, SideBar, TopBar } from '../../components'
import { Appointments, Complaints, Home, Inventory, Notifications, Donors, Settings } from '../'


const Dashboard = () => {
	const navigate = useNavigate()

	const { dashboardConfig } = useGlobalState()
	const { user } = useSelector(state => state.auth)

	useEffect(() => {
		if (!user?.hospital?.is_kyc_updated) {
			navigate('/kyb-capture', { replace: true })
		}
	}, [user])

	return (
		<div className='relative flex justify-between w-full font-poppins'>
			<Modals />

			<SideBar />

			<div className="w-[90%] absolute right-0 flex flex-col h-screen overflow-y-hidden scrollbar-4">
				<TopBar />

				{dashboardConfig.activeLink === 'Home' && (
					<Home />
				)}

				{dashboardConfig.activeLink === 'Donors' && (
					<Donors />
				)}

				{dashboardConfig.activeLink === 'Appointments' && (
					<Appointments />
				)}

				{dashboardConfig.activeLink === 'Inventory' && (
					<Inventory />
				)}

				{dashboardConfig.activeLink === 'Complaints' && (
					<Complaints />
				)}

				{dashboardConfig.activeLink === 'Notifications' && (
					<Notifications />
				)}

				{dashboardConfig.activeLink === 'Settings' && (
					<Settings />
				)}
			</div>
		</div>
	)
}

export default Dashboard