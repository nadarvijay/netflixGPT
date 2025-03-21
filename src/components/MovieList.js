import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

    return (
        <div className='mt-6'>
            <h1 className='text-xl sm:text-3xl pl-3 text-white'>
                {title}
            </h1>
            <div className='flex overflow-x-scroll my-3 py-3 items-center'>
                <div className='flex'>
                    {movies?.map((movie) => (<MovieCard key={movie.id} movieData={movie} />))}
                </div>
            </div>
        </div>
    )
}

export default MovieList