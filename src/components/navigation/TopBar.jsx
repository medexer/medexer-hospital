import React from 'react'
import { FiBell } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import { UserArt1 } from '../../assets'


const TopBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.auth)

    return (
        <div className="flex py-2 px-6 justify-between items-center border-b border-gray-200 sticky top-0 z-[5] bg-white">
            <div className="flex flex-col">
                <h1>{user?.hospitalName ? user?.hospitalName : 'Daisy Land Hospital'}</h1>
                <p className='text-[12px] text-gray-500'>Thank you for using medexer</p>
            </div>

            <div className="flex items-center space-x-5">
                <FiBell
                    size={20}
                    className='text-red-500 cursor-pointer'
                />
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