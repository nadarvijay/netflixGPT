import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from '../redux-store/moviesSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(state => state.movies.upcomingMovies)

    const fetchUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        !upComingMovies && fetchUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;