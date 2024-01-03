'use client'

import React, {useState}from 'react'
import Headerone from '../components/headerone/Main'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import {signIn} from "next-auth/react"
//import { Inter } from 'next/font/google'
import '../ui/globals.css'
import '../globals.css'
//Styles


//import styles from './styles.module.css'
// additional css
import '../assets/css/bootstrap.min.css'
import '../assets/css/animate.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/fontawesome/css/all.min.css'
import '../assets/css/dripicons.css'
import '../assets/css/slick.css'
import '../assets/css/meanmenu.css'
import '../assets/css/default.css'
import '../assets/css/style.css'
import '../assets/css/responsive.css'


export default function page() {
  const [info,setInfo]=useState({email:'',password:''});
  const [error,setError]=useState('')
  const [pending,setPending]=useState(false)
  const router=useRouter();

  const handleInput=(e)=>{
    setInfo((prev)=>({...prev,[e.target.name]:e.target.value}))

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!info.email || !info.password){
      setError('Must Provide all the credentials')
  
    }

    try {
      setPending(true)
      const res=signIn('credentials',{
        email:info.email,
        password:info.password,
        redirect:false

      })
      
      if(res.error){
        setError("Invalid Credentials")
        setPending(false)
        return
      }
      router.push('/dashboard')
  
    } catch (error) {
      setPending(false)
      setError('Something went wrong')
    }

  }

  return (
    <>
    <Headerone/>
    <form className='text-center' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
           
            <input placeholder='Email' name='email'id='email' type='text' required onChange={(e)=>handleInput(e)} />
            <input placeholder='Password' name='password' id='password' type='password' required onChange={(e)=>handleInput(e)} />

            <button type='submit'disabled={pending ? true :false}>{pending? "Logging In" : "Login"}</button>
        
 
        </div>

        <div>
        <p className='text-black-700'>Haven't got an Account?</p>  <Link href='/register' className='font-bold text-cyan-700'>Sign Up</Link>
        </div>
    </form>
    </>  
  )
}

