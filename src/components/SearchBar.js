import React, { useRef } from 'react'
import { lang } from '../utils/lang'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, GEMINI_KEY } from '../utils/constants';
import { addGptMovieResults } from '../redux-store/gptSlice';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SearchBar = () => {
    const currentLang = useSelector(state => state.lang.currentLang)
    const gptSearchText = useRef(null);
    const dispatch = useDispatch();

    const genAI = new GoogleGenerativeAI(GEMINI_KEY);

    const searchMovie = async (movie) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
            API_OPTIONS
        );
        return response.json();
    };

    const handleSearchClick = async () => {
        const userQuery = gptSearchText.current.value.trim();
        if (!userQuery) return; // Prevent empty requests

        const gptQuery = `Act like a Movie Recommendation System and suggest 5 movies for: "${userQuery}". Only return movie names, comma separated.`;

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(gptQuery);
            const text = result.response.text().trim();

            const gptResultArray = text.split(",").map(movie => movie.trim());
            const promiseArray = gptResultArray.map(movie => searchMovie(movie));
            const searchResults = await Promise.all(promiseArray);

            dispatch(addGptMovieResults({ movieNames: gptResultArray, movieResults: searchResults }));
        }
        catch (error) {
            console.error("Gemini API Error:", error);
        }
    };

    return (
        <div className='bg-black px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center w-[90%] md:w-[70%] lg:w-[40%] rounded-md opacity-90'>
            <input
                ref={gptSearchText}
                className='w-[83%] py-2 px-2 sm:px-4 outline-none rounded-md mr-3'
                type='text'
                placeholder={lang[currentLang].searchPlaceHolder}
            />
            <button
                onClick={handleSearchClick}
                className='bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-md'>
                {lang[currentLang].search}
            </button>
        </div>
    );
};

export default SearchBar;
