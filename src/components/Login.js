import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import { BG_IMG } from '../utils/constants'

const Login = () => {
    return (
        <div className={`w-[100%] h-[100%] shadow-lg bg-cover bg-center ${BG_IMG} `}>
            <Header />
            <LoginForm />
        </div>
    )
}

export default Login