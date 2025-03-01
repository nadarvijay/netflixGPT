import React, { useState } from 'react'

const LoginForm = () => {

    const [isSignup, setIsSignup] = useState(false)

    const handleSignUpClick = () => {
        setIsSignup(prev => !prev)
    }

    return (
        <form className='w-[100%] flex flex-col items-center'>
            <div className='w-[25%] flex flex-col p-[60px] bg-black opacity-85'>
                <div className='font-semibold text-3xl text-white mb-5'>
                    {isSignup ? "Sign Up" : "Sign In"}
                </div>
                <input className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number' placeholder='Mobile Number' />
                {!isSignup && <input className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md' type='password' placeholder='Password' />}
                {isSignup && <input className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='text' placeholder='Full Name' />}
                {isSignup && <input className='w-[100%] p-2 mb-4 bg-black border border-white opacity-60 text-[#B9B9B9] outline-none rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='email' placeholder='Email' />}

                <div className='bg-red-600 p-2 text-white text-lg font-light text-center rounded-md cursor-pointer'>
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