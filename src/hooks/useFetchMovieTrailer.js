import { useState, useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        fetchMovieTrailer();
    }, [movieId, fetchMovieTrailer]);

    const fetchMovieTrailer = useCallback(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const videoData = await response.json();
            const trailerList = videoData?.results?.filter((data) => data.type === 'Trailer');
            const selectedTrailer = trailerList.length > 0 ? trailerList[0] : videoData.results?.[0];
            setTrailer(selectedTrailer);
        } catch (error) {
            console.error("Error fetching movie trailer:", error);
        }
    }, [trailer])

    return trailer;
}

export default useFetchMovieTrailer;
