'use client'

import LandingLayout from '../LandingLayout'
import Headerone from '../components/headerone/Main'

import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'



export default function page() {
  const [info,setInfo]=useState({username:'',email:'',password:'',role:'Student'});
  const [error,setError]=useState('')
  const [pending,setPending]=useState(false)
  const router=useRouter();

  const handleInput=(e)=>{
    setInfo((prev)=>({...prev,[e.target.name]:e.target.value}))

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!info.username || !info.email || !info.password){
      setError('Must Provide all the credentials')
      
    }
    try {
      setPending(true)
      const res=await fetch('api/register',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(info)
      })
      if(res.ok){
        setPending(false)
        const form=e.target;
        form.reset();
        router.push('/login')
        console.log('User registered')

      }else{
        const errorData=await res.json();
        setError(errorData.message)
        setPending(false)
      }
  
    } catch (error) {
      setPending(false)
      setError('Something went wrong')
    }

  }
console.log({info})
  return (
    <LandingLayout>
      <Headerone/>
      {/* <form className='text-center' onSubmit={handleSubmit}>
  <div className='flex flex-col justify-center mx-4 w-90% md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] gap-4 text-black'>
    <input
      placeholder='First Name'
      name='FirstName'
      id='name'
      type='text'
      required={true}
      onChange={(e) => handleInput(e)}
      className='border rounded-md p-2'
    />
    <input
      placeholder='Last Name'
      name='LastName'
      id='name'
      type='text'
      required={true}
      onChange={(e) => handleInput(e)}
      className='border rounded-md p-2'
    />
    <input
      placeholder='Email'
      name='email'
      id='email'
      type='email'
      onChange={(e) => handleInput(e)}
      className='border rounded-md p-2'
    />
    <input
      placeholder='Password'
      name='password'
      id='password'
      type='password'
      onChange={(e) => handleInput(e)}
      className='border rounded-md p-2'
    />
    <input
      placeholder='Phone Number'
      name='PhoneNumber'
      id='PhoneNumber'
      type='text'
      onChange={handleInput}
      className='border rounded-md p-2'
    />
    <input
      name='role'
      id='role'
      onChange={handleInput}
      defaultValue={'Student'}
      type='hidden'
    />

    {error && <span className='message'>{error}</span>}

    <button
      type='submit'
      disabled={pending ? true : false}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer'
    >
      {pending ? 'Registering' : 'Register'}
    </button>
  </div>

  <div className='mt-4'>
    <p className='text-black'>Do you have an Account?</p>{' '}
    <Link href='/login' className='text-blue-700 font-bold'>
      Sign In
    </Link>
  </div>
</form> */}



    </LandingLayout>
  )
}

