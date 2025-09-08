import React from 'react';

const VideoBackground = ({ trailer }) => {

    return (
        <iframe className='w-[100%] h-auto sm:aspect-video pt-[30%] sm:pt-0 bg-black'
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&playlist=${trailer?.key}&loop=1&controls=0&showinfo=0`}
            title="YouTube video player"
            allow="autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    );
}

export default VideoBackground;
// 56.25