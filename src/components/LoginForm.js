import React, { useState, useRef, useEffect } from 'react'
import { validateSignIn, validateSignUp } from '../utils/validate';

const LoginForm = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [signInErr, setSignInErr] = useState("");
    const [signUpErr, setSignUpErr] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const mobile = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        if (signInErr == null) { console.log("Signed In") }
    }, [signInErr])

    useEffect(() => {
        if (signUpErr == null) { setIsSignup(false) }
    }, [signUpErr])

    const handleSignUpClick = () => {
        setIsSignup(prev => !prev)
    }

    const handleFormSubmit = () => {
        if (!isSignup) {
            setSignInErr(validateSignIn(mobile?.current?.value, password?.current?.value));
        }
        else {
            console.log(validateSignUp(name?.current?.value, email?.current?.value, mobile?.current?.value));
            setSignUpErr(validateSignUp(mobile?.current?.value, name?.current?.value, email?.current?.value))
        }
    }

    return (
        <form className='w-[100%] flex flex-col items-center'>
            <div className='w-[25%] flex flex-col p-[60px] bg-black opacity-85'>
                <div className='font-semibold text-3xl text-white mb-5'>
                    {isSignup ? "Sign Up" : "Sign In"}
                </div>
                <input ref={mobile} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' placeholder='Mobile Number' />
                {!isSignup && <input ref={password} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md' type='password' placeholder='Password' />}
                {isSignup && <input ref={name} className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='text' placeholder='Full Name' />}
                {isSignup && <input ref={email} className='w-[100%] p-2 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='email' placeholder='Email' />}

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