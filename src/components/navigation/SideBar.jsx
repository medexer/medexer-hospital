import React from 'react'
import { useSelector } from 'react-redux'

import { Logo } from '../../assets'
import { SidebarMenuItems } from '../../data'
import { useGlobalState } from '../../state/context'


const SideBar = () => {
    const { user } = useSelector(state => state.auth)
    const { dashboardConfig, updateDashboardConfig } = useGlobalState()

    return (
        <div className='min-w-72 w-72 h-screen bg-slate-800 duration-500 p-5 pt-4 sticky top-0 left-0 overflow-y-hidden'>
            <div className="flex items-center space-x-8 font-roboto">
                <img
                    src={Logo}
                    alt="icon"
                    className='w-[35px]'
                />

                <h1 className='text-white font-bold'>Medexer</h1>
            </div>

            <div className="flex flex-col mt-10">
                <ul className='pt-4 relative space-y-5'>
                    {SidebarMenuItems?.map((menu, index) => (
                        <li
                            key={`${index}`}
                            className={`text-gray-300 text-[12px] grid grid-cols-2 items-center space-x-[-4em] cursor-pointer px-4 py-4 hover:bg-gray-500 mt-2 ${dashboardConfig.activeLink === menu.title && 'bg-gray-500'}`}
                            onClick={() => updateDashboardConfig({ activeLink: menu.title })}
                        >
                            <img src={menu.icon} className='text-red-400' alt="" />
                            <span className='uppercase font-medium origin-left duration-200 text-[12px]'>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar