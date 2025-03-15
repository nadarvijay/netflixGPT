import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SearchSuggestion = () => {
    const { movieNames, movieResults } = useSelector((state) => state.gpt);

    return (
        <div className='w-[95%] sm:w-auto px-3 sm:px-10 bg-black opacity-90 mt-5 mb-10'>
            {movieNames?.map((movieName, index) => (
                <MovieList key={movieName} title={movieName} movies={movieResults[index].results} />
            ))}
        </div>
    )
}

export default SearchSuggestion