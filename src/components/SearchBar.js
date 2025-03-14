import React from 'react'
import { lang } from '../utils/lang'
import { useSelector } from 'react-redux'

const SearchBar = () => {

    const currentLang = useSelector(state => state.lang.currentLang)

    return (
        <div className='bg-black px-6 py-4 flex justify-between items-center w-[40%] rounded-md opacity-90'>
            <input className='w-[83%] py-2 px-4 outline-none rounded-md' type='text' placeholder={lang[currentLang].searchPlaceHolder} />
            <button className='bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-md'>{lang[currentLang].search}</button>
        </div>
    )
}

export default SearchBar