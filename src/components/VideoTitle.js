import React from 'react'

const VideoTitle = ({ title, summary }) => {

    return (
        <div className='w-screen aspect-video pl-5 sm:pl-24 absolute pt-[40%] sm:pt-[20%] bg-gradient-to-r from-black-200 text-white'>
            <div className='text-2xl sm:text-5xl font-bold sm:mb-5'>{title}</div>
            <div className='hidden sm:block text-lg w-[40%]'>{summary}</div>
            <div className='flex flex-row mt-2 sm:mt-4'>
                <div className='bg-white text-black px-2 sm:px-6 py-1 sm:py-3 text-lg sm:text-xl mr-4 rounded-md hover:bg-opacity-80'>▶️ Play</div>
                <div className='hidden sm:block bg-gray-500 text-white px-6 py-3 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80'>More Info</div>
            </div>
        </div>
    )
}

export default VideoTitle