import React from 'react'

const VideoTitle = ({ title, summary }) => {

    return (
        <div className='w-screen aspect-video pl-24 absolute pt-[20%] bg-gradient-to-r from-black-200 text-white'>
            <div className='text-5xl font-bold mb-5'>{title}</div>
            <div className='text-lg w-[40%]'>{summary}</div>
            <div className='flex flex-row mt-4'>
                <div className='bg-white text-black px-6 py-3 text-xl mr-4 rounded-md hover:bg-opacity-80'>▶️ Play</div>
                <div className='bg-gray-500 text-white px-6 py-3 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80'>More Info</div>
            </div>
        </div>
    )
}

export default VideoTitle