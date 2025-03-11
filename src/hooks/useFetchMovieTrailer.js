
import { useDispatch } from "react-redux";
import { setTrailer } from "../redux-store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchMovieTrailer();
    }, [])

    const fetchMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const videoData = await data.json();
        const trailerList = videoData?.results?.filter((data) => data.type == 'Trailer');
        const trailer = trailerList.length > 0 ? trailerList[0] : videoData[0];
        dispatch(setTrailer(trailer));
    }
}

export default useFetchMovieTrailer;