import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setCurrentTrailerData, setTrailerPopUpToggle } from '../redux-store/moviesSlice'

const MovieCard = ({ movieData }) => {
    const dispatch = useDispatch();
    if (!movieData.poster_path) { return }

    const handleCardClick = () => {
        dispatch(setTrailerPopUpToggle());
        dispatch(setCurrentTrailerData(movieData));
    }

    return (
        <div className='w-36 sm:w-48 px-2 flex' onClick={handleCardClick}>
            <img
                className='rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-800'
                src={IMAGE_CDN_URL + movieData.poster_path}
                alt={"movieCard"}
            />
        </div>
    )
}

export default MovieCard