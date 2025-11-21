import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './mainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'
import TrailerPopUp from './TrailerPopUp'
import useFetchMovieTrailer from '../hooks/useFetchMovieTrailer'

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const searchToggle = useSelector((state) => state.gpt.searchPageToggle)
    const videoData = useSelector((state) => state.movies.nowPlayingMovies)
    const trailer = useFetchMovieTrailer(videoData?.[0]?.id);

    return (
        <div>
            <Header />
            {
                searchToggle ? <GptSearchPage /> :
                    <>
                        {
                            trailer ?
                                <MainContainer videoData={videoData} trailer={trailer} />
                                :
                                <div className='w-[100%] h-[56.5vw] pt-[30%] sm:pt-0 bg-gray-400 animate-pulse'>
                                </div>
                        }
                        <SecondaryContainer />
                        <TrailerPopUp />

                    </>
            }
        </div>
    )
}

export default Browse