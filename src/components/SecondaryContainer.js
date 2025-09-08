import React from 'react'
import MovieList from './MovieList'
import ShimmerList from './ShimmerList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
        // movies &&
        <div className='bg-black'>
            <div className='ml-2 sm:ml-5 bg-transparent -mt-[7%] sm:-mt-[13%] relative'>
                {/* <MovieList title={"Top Rated"} movies={movies.topRatedMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                        :
                        <ShimmerList title={"Top Rated"} />
                }
                {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                        :
                        <ShimmerList title={"Now Playing"} />
                }
                {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Popular"} movies={movies.popularMovies} />
                        :
                        <ShimmerList title={"Popular"} />
                }
                {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                        :
                        <ShimmerList title={"Horror"} />
                }
                {/* <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                        :
                        <ShimmerList title={"Upcoming Movies"} />
                }
                {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
                {
                    movies.topRatedMovies
                        ? <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                        :
                        <ShimmerList title={"Now Playing"} />
                }
            </div>
        </div>


        // <ShimmerList title={"Now Playing"} />
        // <ShimmerList title={"Popular"} />
        // <ShimmerList title={"Horror"} />
        // <ShimmerList title={"Upcoming Movies"} />
        // <ShimmerList title={"Now Playing"} />

    )
}

export default SecondaryContainer