import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { NetFlix_Logo } from '../utils/constants';

const Header = () => {
    const user = useSelector((state) => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error);
        });
    }
    return (
        <div className='w-[100%] bg-gradient-to-b from-black flex flex-row items-center justify-between'>
            <img className='w-[12%] ml-[10%] pt-[1%]' src={NetFlix_Logo} alt='logo' />
            <div className='mr-10 flex flex-row'>
                <img src={user?.photoURL} className='w-[40px] h-[40px] rounded-[50%] mr-4' />
                <button className='bg-gradient-to-tr from-red-700 p-2 px-4 rounded-md' onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default Header