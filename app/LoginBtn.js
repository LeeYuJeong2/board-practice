"use client"

import { signIn, signOut } from 'next-auth/react'


export default function LoginBtn(){

    // useEffect(()=>{
    //     if(typeof window != 'undefined'){
    //         localStorage.setItem('모드','dark')
    //     }
    // },[])


    return(
    <button onClick={()=>{ signIn() }}>로그인</button>
    )
}