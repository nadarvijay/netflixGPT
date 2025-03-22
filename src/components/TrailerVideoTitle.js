import React from 'react'

const TrailerVideoTitle = ({ title, summary }) => {

    return (
        <div className='w-[100%] aspect-video pl-5 sm:pl-10 md:pl-15 lg:pl-24 absolute pt-[15%] sm:pt-[20%] bg-gradient-to-r from-black-200 text-white'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold sm:mb-5 w-[70%]'>{title}</div>
            <div className='hidden sm:hidden md:hidden lg:hidden xl:block text-md w-[70%]'>{summary}</div>
            <div className='flex flex-row mt-2 sm:mt-4 w-[40%]'>
                <div className='bg-white text-black px-2 sm:px-6 py-1 sm:py-3 text-lg sm:text-xl mr-4 rounded-md hover:bg-opacity-80'>▶️ Play</div>
                <div className='hidden sm:block bg-gray-500 text-white px-6 py-3 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80'>More Info</div>
            </div>
        </div>
    )
}

export default TrailerVideoTitle