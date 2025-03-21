import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
        movies &&
        <div className='bg-black'>
            <div className='ml-2 sm:ml-5 bg-transparent -mt-[7%] sm:-mt-[13%] relative'>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer