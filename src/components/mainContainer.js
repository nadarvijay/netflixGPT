import React, { useState } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const videoData = useSelector((state) => state.movies.nowPlayingMovies)
    if (!videoData) { return }

    return (
        <div>
            <VideoTitle title={videoData[0]?.title} summary={videoData[0]?.overview} />
            <VideoBackground movieId={videoData[0]?.id} />
        </div>
    )
}

export default MainContainer