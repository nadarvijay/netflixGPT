import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchPageToggle } from '../redux-store/gptSlice';
import { LANG_LIST } from '../utils/constants';
import { setCurrentLang } from '../redux-store/langSlice';

const Header = () => {
    const user = useSelector((state) => state.user);
    const searchPageToggle = useSelector(state => state.gpt.searchPageToggle);

    const dispatch = useDispatch()

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error);
        });
    }

    const handleSearchClick = () => {
        dispatch(setSearchPageToggle());
    }

    const handleLangSelect = (e) => {
        dispatch(setCurrentLang(e.target.value));
    }

    return (
        <div className='w-[100%] bg-gradient-to-b from-black flex flex-col sm:flex-row sm:py-3 lg:py-0 items-center justify-between absolute z-10'>
            <img className='w-[25%] sm:w-[7%] sm:ml-[10%] pt-[1%]' src='TrailerVerselogo.png' alt='logo' />
            {
                user &&
                <div className='sm:mr-10 flex flex-row items-center'>
                    {
                        <select className='bg-black px-2 py-2 mr-5 text-white' onChange={handleLangSelect}>
                            {LANG_LIST.map((option) => (
                                <option key={option.val} value={option.val}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    }
                    <img src={user?.photoURL} className='hidden sm:block w-[40px] h-[40px] rounded-[50%] mr-4' alt='profileImg' />
                    <button onClick={handleSearchClick} className='bg-red-600 text-white font-semibold py-2 px-4 mr-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-md'>
                        {searchPageToggle ? "Home Page" : "Search Gemini"}
                    </button>
                    <button className='bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition-all duration-300 shadow-md' onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header