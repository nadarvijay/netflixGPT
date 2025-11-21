import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from '../redux-store/moviesSlice'

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

    const fetchTopRatedMovies = useCallback(async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }, [dispatch]);

    useEffect(() => {
        if (!topRatedMovies) {
            fetchTopRatedMovies();
        }
    }, [topRatedMovies, fetchTopRatedMovies]);
};

export default useTopRatedMovies;
