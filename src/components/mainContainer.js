import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = ({ videoData, trailer }) => {
    return (
        <div>
            <VideoTitle title={videoData[0]?.title} summary={videoData[0]?.overview} />
            <VideoBackground trailer={trailer} />
        </div>
    )
}

export default MainContainer