import React from 'react'
import { FiBell } from 'react-icons/fi'
import { useSelector } from 'react-redux'


const TopBar = () => {
    const { user } = useSelector(state => state.auth)

    console.log(user)
    return (
        <div className="flex px-6 justify-between items-center border-b border-gray-200 sticky top-0 z-[5] bg-white topbar">
            <div className="flex flex-col">
                <h1 className='font-semibold'>{user?.hospital ? user?.hospital?.hospitalName : 'Medexer'}</h1>
                <p className='text-[10px] text-gray-500'>Thank you for using medexer</p>
            </div>

            <div className="flex items-center space-x-5">
                <FiBell
                    size={20}
                    className='text-red-500 cursor-pointer'
                />
            </div>
        </div>
    )
}

export default TopBar