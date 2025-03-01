import React from 'react'
import Header from './Header'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className=" w-[100%] h-[100%] shadow-lg bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg)]">
            <Header />
            <LoginForm />
        </div>
    )
}

export default Login