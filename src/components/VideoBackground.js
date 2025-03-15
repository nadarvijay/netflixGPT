import React from 'react'
import useFetchMovieTrailer from '../hooks/useFetchMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

    useFetchMovieTrailer(movieId);
    const trailer = useSelector((state) => state.movies?.trailer)

    return (
        <iframe className='w-screen h-auto sm:aspect-video pt-[30%] sm:pt-0 bg-black'
            src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&loop=1"}
            title="YouTube video player"
            allow="autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    )
}

export default VideoBackground