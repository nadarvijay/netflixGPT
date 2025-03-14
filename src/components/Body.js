import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../redux-store/userSlice';
import { useNavigate } from 'react-router-dom';

const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const authSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    displayName: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                }));

                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate("/login");
            }
        });

        //Unsubscribes onAuthStateChanged when body component unmounts
        return () => { authSubscribe() }
    }, [])


    return (
        <div className='w-[100%] h-[100%]'>
            <Outlet />
        </div>
    )
}

export default Body