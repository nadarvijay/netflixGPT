import React from 'react'
import useFetchMovieTrailer from '../hooks/useFetchMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

    useFetchMovieTrailer(movieId);
    const trailer = useSelector((state) => state.movies?.trailer)

    return (
        <div>
            <iframe className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="autoplay"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground