import React from 'react'
import { toast } from 'react-toastify'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Logo } from '../../assets'
import { SidebarMenuItems } from '../../data'
import { useGlobalState } from '../../state/context'
import { authLogout } from '../../state/redux/actions/auth.actions'


const SideBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.auth)
    const { dashboardConfig, updateDashboardConfig } = useGlobalState()

    return (
        <div className='min-w-[10%] w-[10%] h-screen bg-primary duration-500 pt- fixed top-0 left-0 overflow-y-hidden overflow-x-hidden'>
            <div className="flex flex-col items-center space-y- font-roboto border-b border-b-gray-600 pt-2">
                <img
                    src={Logo}
                    alt="icon"
                    className='w-[40px]'
                />

                <h1 className='text-white text-[12px] font-medium'>Medexer</h1>
            </div>

            <div className="flex flex-col mt-5 -5">
                <ul className='relative space-y-'>
                    {SidebarMenuItems?.map((menu, index) => (
                        <li
                            key={`${index}`}
                            className={`text-gray-300 text-[12px] flex flex-col items-center space-y-1 cursor-pointer px-4 py-2 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 mt-2 ${dashboardConfig.activeLink === menu.title && 'text-sky-500 bg-gradient-to-r from-gray-900 to-gray-800'}`}
                            onClick={() => updateDashboardConfig({ activeLink: menu.title })}
                        >
                            <img
                                alt=""
                                className='text-red-400'
                                src={dashboardConfig.activeLink === menu.title ? menu.activeIcon : menu.icon}
                            />
                            <p className={`uppercase font-medium origin-left duration-200 text-[10px] ${dashboardConfig.activeLink === menu.title ? 'text-sky-500' : ''}`}>{menu.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <p
                onClick={() => dispatch(authLogout({ toast, navigate, updateDashboardConfig }))}
                className='cursor-pointer flex flex-col md:flex-row justify-center items-center text-[14px] text-red-500 space-x-2 font-semibold mt-5'
            >
                <FiLogOut />
                <span>Logout</span>
            </p>
        </div>
    )
}

export default SideBar