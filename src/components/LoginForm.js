import React, { useState, useRef, } from 'react'
import { validateSignIn, validateSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux-store/userSlice';

const LoginForm = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [signInErr, setSignInErr] = useState("");
    const [signUpErr, setSignUpErr] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const mobile = useRef(null);
    const password = useRef(null);

    const handleSignUpClick = () => {
        setIsSignup(prev => !prev)
    }

    const handleFormSubmit = () => {
        if (!isSignup) {
            const err = validateSignIn(email?.current?.value, password?.current?.value)
            setSignInErr(err);
            if (err != null) { return }

            // if err == null
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setSignInErr(errorMessage);
                });

        }
        else {
            const err = validateSignUp(email?.current?.value, name?.current?.value, mobile?.current?.value, password?.current?.value);
            setSignUpErr(err);
            if (err != null) { return }

            // if err == null
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name?.current?.value,
                        phoneNumber: mobile?.current?.value,
                        photoURL: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    }).then(() => {

                    }).catch((error) => {
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setSignUpErr(errorMessage);
                });
        }
    }

    return (
        <form className='w-[100%] flex flex-col items-center'>
            <div className='w-[25%] flex flex-col p-[60px] bg-black opacity-85'>
                <div className='font-semibold text-3xl text-white mb-5'>
                    {isSignup ? "Sign Up" : "Sign In"}
                </div>
                <input ref={email} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='email' placeholder='Email' />
                {isSignup && <input ref={name} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='text' placeholder='Full Name' />}
                {isSignup && <input ref={mobile} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' placeholder='Mobile Number' />}
                <input ref={password} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md' type='password' placeholder='Password' />

                <div className='text-sm text-red-500 mb-4'>
                    {!isSignup ? signInErr : signUpErr}
                </div>

                <div className='bg-red-600 p-2 text-white text-lg font-light text-center rounded-md cursor-pointer' onClick={handleFormSubmit}>
                    {isSignup ? "Sign Up" : "Sign In"}
                </div>

                {!isSignup ?
                    <div className='text-[#B9B9B9] mt-2'>
                        New to NetFlix ?<span className='text-white cursor-pointer' onClick={handleSignUpClick}> Sign up now</span>
                    </div>
                    :
                    <div className='text-[#B9B9B9] mt-2'>
                        Already Registered ?<span className='text-white cursor-pointer' onClick={handleSignUpClick}> Sign In</span>
                    </div>
                }
            </div>
        </form>
    )
}

export default LoginForm