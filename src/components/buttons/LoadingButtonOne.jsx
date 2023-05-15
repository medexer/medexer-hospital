import React from 'react'

import LoaderOne from '../loaders/LoaderOne'


const LoadingButtonOne = ({ textColor, classes, loadingType, width }) => {
    return (
        <button
            className={`
                ${width}
                ${classes}
                ${textColor}
                flex items-center justify-center
            `}
            type={'button'}
        >
            {loadingType === 'one' && (
                <LoaderOne />
            )}

        </button>
    )
}

export default LoadingButtonOne