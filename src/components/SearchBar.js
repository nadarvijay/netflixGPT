import React, { useRef } from 'react'
import { lang } from '../utils/lang'
import { useDispatch, useSelector } from 'react-redux'
import OpenAI from "openai";
import { API_OPTIONS, OPENAI_KEY } from '../utils/constants';
import { addGptMovieResults } from '../redux-store/gptSlice';

const SearchBar = () => {

    const currentLang = useSelector(state => state.lang.currentLang)
    const gptSearchText = useRef(null);
    const dispatch = useDispatch();

    const client = new OpenAI({
        apiKey: OPENAI_KEY,
        dangerouslyAllowBrowser: true
    });

    const searchMovie = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json;
    }

    const handleSearchClick = async () => {

        // const gptQuery = "Act like a Movie Recommendation System and suggest some movies for the query :" + gptSearchText.current.value + ". Only give me names of 5 movies comma seperated";

        // const gptResult = await client.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         {
        //             role: "user",
        //             content: gptQuery,
        //         },
        //     ],
        // });

        const gptResult = "Andaz Apna Apna , Hera Pheri , Chupke Chupke , Jaane Bhi Do Yaaro , Padosan";
        const gptResultArray = gptResult.split(",");
        const promiseArray = gptResultArray.map((movie) => searchMovie(movie));
        const searchResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResults({ movieNames: gptResultArray, movieResults: searchResults }))

    }


    return (
        <div className='bg-black px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center w-[90%] md:w-[70%] lg:w-[40%] rounded-md opacity-90'>
            <input ref={gptSearchText} className='w-[83%] py-2 px-2 sm:px-4 outline-none rounded-md mr-3' type='text' placeholder={lang[currentLang].searchPlaceHolder} />
            <button onClick={handleSearchClick} className='bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-md'>{lang[currentLang].search}</button>
        </div>
    )
}

export default SearchBar