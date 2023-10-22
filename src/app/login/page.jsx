"use client"
import React from 'react'
import LoginBtn from "../../components/login-btn.jsx";


function Login() {
    return (
        <div className='flex items-center justify-center'>
            <LoginBtn provider="google">Sign in with Google
            </LoginBtn>
        </div>
    )
}

export default Login
