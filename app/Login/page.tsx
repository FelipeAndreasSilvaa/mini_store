"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from "next-auth/react";


const Login = () => {

  const router = useRouter()
  const [error, setError] = useState('')
  const { data: session, status: sessionStatus } = useSession()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  useEffect(() => {
    if( isValidEmail(email) && password.length >= 8) {
      setIsFormValid(true)
    }else{
      setIsFormValid(false)
    }
  }, [email, password]);

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!isValidEmail(email)){
      setError("Email is invalid")
      return
    }
    if (!password || password.length < 8){
      setError("Password is invalid")
      return
    }

    const res = await signIn("credentials",{
      redirect: false,
      email,
      password,
    })
    if(res?.error){
      setError("Invalid email or password")
    }else{
      setError("")
      router.push("/")
    }
  }



  return (
    <div className="container px-4 flex items-center justify-center pt-14 ">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">Log In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label>
                <input type="checkbox" />
                <span className="ml-1 font-extrabold">Remember me</span>
              </label>
            </div>
            <div className="w-full lg:w-auto px-4">
              <a
                className="inline-block font-extrabold hover:underline"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button disabled={!isFormValid} className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
            Sign in
          </button>
          
          <p className="text-center font-extrabold">
            Don&rsquo;t have an account?{" "}
            <Link className="text-red-500 hover:underline" href={'/SignIn'}>
              Sign up
            </Link>
          </p>

          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>

        </form>
      </div>
    </div>
  );
}

export default Login