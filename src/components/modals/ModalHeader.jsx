import React from 'react'

const ModalHeader = ({ modalHandler, radius }) => {
    return (
        <div className={`flex justify-between items-center`}>
            <p
                className={`text-gray-800 bg-red-300 py- px-2 rounded-full font-medium cursor-pointer ${radius}`}
                onClick={modalHandler}
            >x</p>
        </div>
    )
}

export default ModalHeader