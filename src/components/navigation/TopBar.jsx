import React from 'react'
import { FiBell } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import { UserArt1 } from '../../assets'


const TopBar = ({ activeLink, showAuthModal }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.auth)

    return (
        <div className="flex py-1 px-4 justify-between items-center border-b border-gray-200 sticky top-0 z-[5] bg-white">
            <h1>Medexer</h1>

            <div className="flex items-center space-x-5">
                <FiBell
                    size={20}
                />

                <div className="flex items-center space-x-2 border-l border-slate-400 pl-5 ">
                    <p className='text-[12px]'>{user?.hospitalName}</p>

                    {/* <img
                        src={UserArt1}
                        alt="user__art"
                        className='w-[40px] h-[40px] rounded-full border-2 border-sky-200 p-[1px] cursor-pointer'
                    /> */}

                </div>
            </div>

            {/* {config.showAuth && (
                <div className="absolute -bottom-10 right-2 bg-white w-[100px] border px-2 pb-4 pt-1">
                    <Link
                        to={'/'}
                        onClick={handleLogout}
                        className='cursor-pointer text-[12px]'
                    >
                        Logout</Link>
                </div>
            )} */}
        </div>
    )
}

export default TopBar