import React from 'react'

import { useGlobalState } from '../../state/context'
import { Modals, SideBar, TopBar } from '../../components'
import { Appointments, Complaints, Home, Inventory, Notifications, Settings } from '../'


const Dashboard = () => {
	const { dashboardConfig } = useGlobalState()

	return (
		<div className='relative flex justify-between w-full font-lato'>
			<Modals />

			<SideBar />

			<div className="w-[90%] absolute right-0 flex flex-col bg-gray-100 h-screen overflow-y-hidden scrollbar-4">
				<TopBar />

				{dashboardConfig.activeLink === 'Home' && (
					<Home />
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