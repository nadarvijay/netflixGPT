import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {

    if (!posterPath) { return }

    return (
        <div className='w-36 sm:w-48 px-2 flex'>
            <img src={IMAGE_CDN_URL + posterPath} alt={"movieCard"} />
        </div>
    )
}

export default MovieCard