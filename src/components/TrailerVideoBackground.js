import React from 'react';
import useFetchMovieTrailer from '../hooks/useFetchMovieTrailer';

const TrailerVideoBackground = ({ movieId }) => {
    const trailer = useFetchMovieTrailer(movieId);

    return (
        <iframe className='w-[100%] h-auto sm:aspect-video bg-black'
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&playlist=${trailer?.key}&loop=1&controls=0&showinfo=0`}
            title="YouTube video player"
            allow="autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    );
}

export default TrailerVideoBackground;
