import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMG } from '../utils/constants'
import SearchSuggestion from './SearchSuggestion'

const GptSearchPage = () => {
    return (
        <div className={`w-screen h-screen ${BG_IMG} pt-[10%] flex flex-col items-center`}>
            <SearchBar />
            <SearchSuggestion />
        </div>
    )
}

export default GptSearchPage