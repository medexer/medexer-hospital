import React from 'react'

const ModalHeader = ({ modalHandler }) => {
    return (
        <div className="flex justify-between items-center">
            <p
                className="text-gray-800 bg-red-300 py- px-2 rounded-md font-medium cursor-pointer"
                onClick={modalHandler}
            >x</p>
        </div>
    )
}

export default ModalHeader