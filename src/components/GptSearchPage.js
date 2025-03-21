import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMG } from '../utils/constants'
import SearchSuggestion from './SearchSuggestion'
import TrailerPopUp from './TrailerPopUp'

const GptSearchPage = () => {
    return (
        <div className={`w-screen min-h-screen ${BG_IMG} pt-[33%] sm:pt-[10%] flex flex-col items-center`}>
            <SearchBar />
            <SearchSuggestion />
            <TrailerPopUp />
        </div>
    )
}

export default GptSearchPage