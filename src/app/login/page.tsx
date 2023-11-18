"use client"
import React from 'react'
import LoginBtn from "../../components/login-btn";


function Login() {
    return (
        <div className='flex items-center justify-center'>
            <LoginBtn provider="google" bg="bg-sky-400" bgHover="hover:bg-sky-500">Sign in with Google
            </LoginBtn>
        </div>
    )
}

export default Login
