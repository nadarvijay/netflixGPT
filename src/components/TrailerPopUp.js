import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { setTrailerPopUpToggle } from '../redux-store/moviesSlice';

const TrailerPopUp = () => {
    const videoData = useSelector(state => state.movies.currentTrailerData);
    const showTrailerPopup = useSelector(state => state.movies.trailerPopUpToggle);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setTrailerPopUpToggle());
    };

    if (!showTrailerPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={handleClose}>
            <div
                className="relative w-[70%] bg-black rounded-lg p-2 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button
                    className="absolute -top-5 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                    onClick={handleClose}
                >
                    ✕
                </button>

                <VideoTitle title={videoData?.title} summary={videoData?.overview} />
                <VideoBackground movieId={videoData?.id} />
            </div>
        </div>
    );
}

export default TrailerPopUp;
